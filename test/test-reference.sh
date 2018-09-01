#!/bin/bash
set -e

DIR="$( cd "$( dirname $0 )" && pwd )"

. "$DIR/scripts/_build-test-parameter.sh"

for f in packages/*; do
  if [ -n "$PACKAGE" ] && [ `basename $f` != "$PACKAGE" ]; then
    continue
  fi

  if [ -d "$f/test" ]; then
    mkdir -p "$f/test/tmp"
    # Build HTML
    bash "$DIR/scripts/build-test-html.sh" --package $(basename $f)
    # Build CSS
    bash "$DIR/scripts/build-test-css.sh" --package $(basename $f)
    # Copy the BackstopJS configuration file.
    cp backstop.json "$f"
    # Create test reference
    ( cd "$f" && ../../node_modules/.bin/backstop reference --docker )
    # Cleanup
    rm -Rf "$f/test/tmp"
    rm "$f/backstop.json"
  fi
done
