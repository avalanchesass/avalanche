#!/bin/sh
set -e

while [[ $# -gt 1 ]]
do
key="$1"
case $key in
    -p|--package)
    PACKAGE="$2"
    shift
    ;;
    *)
    ;;
esac
shift
done

for f in packages/*; do
  if [ -n "$PACKAGE" ] && [ `basename $f` != "$PACKAGE" ]; then
    continue
  fi

  if [ -d "$f/test" ]; then
    # Build CSS
    node_modules/node-sass/bin/node-sass --importer node_modules/node-sass-magic-importer "$f/test/test.scss" | node_modules/postcss-cli/bin/postcss -u autoprefixer -o "$f/test/tmp/test.css"
    # Build HTML
    BODY=$(cat "$f/test/body.html")
    echo $(cat test/test.html.template) | node_modules/handlebarsjs-cli/index.js --body "$BODY" > "$f/test/tmp/test.html"
    # Create test reference
    ( cd "$f" && ../../node_modules/backstopjs/cli/index.js reference --configPath=../../backstop.json )
    # Cleanup
    rm -Rf "$f/test/tmp"
  fi
done
