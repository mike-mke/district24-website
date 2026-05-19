#!/bin/zsh

if [[ ! -d "dist" ]]; then
    echo "Directory does not exist - creating it"
	mkdir dist
fi

if [[ -f "dist/district24.zip" ]]; then
    echo "File exists, deleting it"
	rm dist/*.zip
fi

zip -r dist/district24.zip css js index.html -x archive dist index.og.html
