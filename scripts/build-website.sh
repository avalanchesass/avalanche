#!/bin/sh
set -e

TEMPLATE=$(cat website/index.hbs)
CSS='<link rel="stylesheet" href="demo.css"><link rel="stylesheet" href="/css/index.css">'
CSS=${CSS//\"/\\\"}

for f in packages/*; do
  if [ -n "$PACKAGE" ] && [ `basename $f` != "$PACKAGE" ]; then
    continue
  fi

  if [ -f "$f/README.md" ]; then
    BODY=$(cat "$f/README.md")
    EXAMPLE=$(pcregrep -M '```html(\n|.)*?```' "$f/README.md")
    EXAMPLE=${EXAMPLE/'```html'/}
    EXAMPLE=${EXAMPLE/'```'/}
    BODY=${BODY/'```html'/$EXAMPLE'```html'}
    BODY=$(echo "$BODY" | node_modules/marked/bin/marked)
    mkdir -p "website/dist/$f"
    # Build CSS
    node_modules/node-sass/bin/node-sass --importer node_modules/node-sass-magic-importer "$f/scss/index.scss" | node_modules/postcss-cli/bin/postcss -u autoprefixer -o "website/dist/$f/demo.css"
    # Build HTML
    HEADER="{\"css\": \"$CSS\", \"title\": \"$(basename $f)\"}"
    echo "$TEMPLATE" | node_modules/handlebars-cmd/index.js --header "$HEADER" --body "$BODY" > "website/dist/$f/index.html"
  fi
done
