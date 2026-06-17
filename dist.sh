#!/bin/zsh

# ── compile JSX ────────────────────────────────────────────────────────────────
echo "Compiling JSX…"
npx babel js/index.js --out-file js/index.compiled.js --presets @babel/preset-react
[[ $? -ne 0 ]] && { echo "Babel compile failed"; exit 1; }

# ── package ────────────────────────────────────────────────────────────────────
[[ ! -d "dist" ]] && { echo "Creating dist/"; mkdir dist; }
[[ -f "dist/district24.zip" ]] && { echo "Removing old zip"; rm dist/*.zip; }

zip -r dist/district24.zip css js index.html -x "js/index.js" -x "*.DS_Store"

echo "Done → dist/district24.zip"
