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


usage() {
  echo "Usage: $0 [local|docker|aws]"
  echo ""
  echo "  local   Build frontend and deploy to local nginx (/usr/local/nginx/html)"
  echo "  docker  Build fresh Docker image and run via docker-compose"
  echo "  aws     Build, tag, push Docker image and redeploy to AWS Amplify"
  echo ""
  echo "When deploying to AWS, first run:  aws login --profile district24"
  echo ""
  exit 1
}


# ── Build ────────────────────────────────────────────────────────────
function app_build() {
    rm -rf build
    mkdir -p build
    rm -rf dist
    mkdir -p dist
    rm js/index.compiled.js

    npx babel js/index.js --out-file js/index.compiled.js --presets @babel/preset-react
    cp -a index.html build/
    cp -a css build/
    cp -a js build/
    rm build/js/index.js
}
# ── Package ───────────────────────────────────────────────────────────────────
function app_package() {
    [[ ! -d "dist" ]] && { echo "Creating dist/"; mkdir dist; }
    [[ -f "dist/district24.zip" ]] && { echo "Removing old zip"; rm dist/*.zip; }
    zip -r dist/district24.zip css js index.html -x "js/index.js" -x "*.DS_Store"
}

# ── Deploy targets ────────────────────────────────────────────────────────────
function cmd_local() {
    cp -a build/. /usr/local/nginx/html/
    echo "Deployed to local nginx"
}

function cmd_docker() {
    docker build -t district24 .
    # Stop and remove any existing container with the same name
    docker rm -f district24 2>/dev/null || true
    docker run -d -p $LOCAL_PORT:80 --name district24 district24
    echo "Running at http://localhost:$LOCAL_PORT"
}

function cmd_aws() {
    AMPLIFY_APP_ID="${AMPLIFY_APP_ID:?Need AMPLIFY_APP_ID}"
    AMPLIFY_BRANCH="${AMPLIFY_BRANCH:-main}"

    echo "Creating Amplify deployment..."
    app_package
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
}

# ── Entry point ───────────────────────────────────────────────────────────────
# we always build, do not always package or deploy
app_build


[[ $# -ne 1 ]] && usage

case "$1" in
  local)  cmd_local  ;;
  docker) cmd_docker ;;
  aws)    cmd_aws    ;;
  *)      usage      ;;
esac
