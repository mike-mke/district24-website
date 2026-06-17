#!/bin/bash
# Usage:
#   ./build.sh               — build only
#   ./build.sh local         — build + deploy to local nginx at /usr/local/nginx/html/
#   ./build.sh docker        — build Docker image + run at http://localhost:8080
#   ./build.sh aws           — build + deploy to AWS Amplify

set -e

DEPLOY="${1:-}"
AMPLIFY_APP_ID="d2zcneygndvg6j"
AMPLIFY_BRANCH="production"
LOCAL_PORT="8080"

# ── Build ────────────────────────────────────────────────────────────
# Three separate Vite builds so each sub-site bundle has the correct
# BASE_URL (import.meta.env.BASE_URL) baked in for BrowserRouter.
#
# Pieces SVGs live ONLY in build/pieces/.  The diagram generator always
# fetches /pieces/<set>/<piece>.svg (absolute URL from origin root), so
# one shared copy is all that's needed — duplicates in swcc/ and wcc/
# are removed after each sub-site build.

rm -rf build
mkdir -p build

npx babel js/index.js --out-file js/index.compiled.js --presets @babel/preset-react
cp -a index.html build/
cp -a css build/
cp -a js build/
rm build/js/index.js

# ── package ────────────────────────────────────────────────────────────────────
[[ ! -d "dist" ]] && { echo "Creating dist/"; mkdir dist; }
[[ -f "dist/district24.zip" ]] && { echo "Removing old zip"; rm dist/*.zip; }

zip -r dist/district24.zip css js index.html -x "js/index.js" -x "*.DS_Store"

# echo "All built!"

# ── Deploy ───────────────────────────────────────────────────────────

if [ "$DEPLOY" = "local" ]; then
    cp -a build/. /usr/local/nginx/html/
    echo "Deployed to local nginx!"

elif [ "$DEPLOY" = "aws" ]; then
    AMPLIFY_APP_ID="${AMPLIFY_APP_ID:?Need AMPLIFY_APP_ID}"
    AMPLIFY_BRANCH="${AMPLIFY_BRANCH:-main}"

    # echo "Zipping build/..."
    # mkdir -p dist
    # rm -f dist/district24.zip
    # (cd build && zip -qr ../dist/district24.zip .)

    echo "Creating Amplify deployment..."
    DEPLOY_JSON=$(aws amplify create-deployment \
        --app-id "$AMPLIFY_APP_ID" \
        --branch-name "$AMPLIFY_BRANCH" \
        --profile district24 \
        --output json)

    JOB_ID=$(echo "$DEPLOY_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['jobId'])")
    ZIP_UPLOAD_URL=$(echo "$DEPLOY_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['zipUploadUrl'])")

    echo "Uploading dist/district24.zip (job $JOB_ID)..."
    curl -s -w "\nHTTP %{http_code}\n" \
        -H "Content-Type: application/zip" \
        --upload-file dist/district24.zip \
        "$ZIP_UPLOAD_URL"

    echo "Starting deployment..."
    aws amplify start-deployment \
        --app-id "$AMPLIFY_APP_ID" \
        --branch-name "$AMPLIFY_BRANCH" \
        --job-id "$JOB_ID" \
        --profile district24 \
        --output json

    echo "Deployment started (job $JOB_ID)!"

elif [ "$DEPLOY" = "docker" ]; then
    docker build -t district24 .
    # Stop and remove any existing container with the same name
    docker rm -f district24 2>/dev/null || true
    docker run -d -p $LOCAL_PORT:80 --name district24 district24
    echo "Running at http://localhost:$LOCAL_PORT"
fi
