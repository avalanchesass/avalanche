#!/bin/sh
set -e

for f in packages/*; do
  if [ -n "$PACKAGE" ] && [ `basename $f` != "$PACKAGE" ]; then
    continue
  fi

  if [ -f "$f/README.md" ]; then
    # BODY=$(node_modules/marked/bin/marked -i "$f/README.md")
    BODY=$(cat "$f/README.md")
    EXAMPLE=$(pcregrep -M '```html(\n|.)*?```' "$f/README.md")
    EXAMPLE=${EXAMPLE/'```html'/}
    EXAMPLE=${EXAMPLE/'```'/}
    BODY=${BODY/'```html'/$EXAMPLE'```html'}
    BODY=$(echo "$BODY" | node_modules/marked/bin/marked)
    TEMPLATE=$(cat website/demo.html.template)
    mkdir -p "website/dist/$f"
    echo "$TEMPLATE" | node_modules/handlebarsjs-cli/index.js --body "$BODY" > "website/dist/$f/test.html"



    # Build CSS
    # node_modules/node-sass/bin/node-sass --importer node_modules/node-sass-magic-importer "$f/test/test.scss" | node_modules/postcss-cli/bin/postcss -u autoprefixer -o "$f/test/tmp/test.css"
    # # Build HTML
    # BODY=$(cat "$f/test/body.html" | tr '\r\n' ' '); sed "s~{{ body }}~${BODY}~g" test/test.html.template > "$f/test/tmp/test.html"
    # # Test
    # ( cd "$f" && ../../node_modules/backstopjs/cli/index.js test --configPath=../../backstop.json )
    # # Cleanup
    # rm -Rf "$f/test/tmp"
  fi
done
