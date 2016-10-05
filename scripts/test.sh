#!/bin/sh
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/_build-test-parameter.sh"

for f in packages/*; do
  if [ -n "$PACKAGE" ] && [ `basename $f` != "$PACKAGE" ]; then
    continue
  fi

  if [ -d "$f/test" ]; then
    mkdir -p "$f/test/tmp"
    # Build HTML
    sh scripts/build-test-html.sh --package $(basename $f)
    # Build CSS
    sh scripts/build-test-css.sh --package $(basename $f)
    # Test
    ( cd "$f" && ../../node_modules/backstopjs/cli/index.js test --configPath=../../backstop.json )
    # Cleanup
    rm -Rf "$f/test/tmp"
  fi
done
