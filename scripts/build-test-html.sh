#!/bin/sh
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/_build-test-parameter.sh"

BODY=$(cat "packages/$PACKAGE/test/body.hbs")
echo $(cat test/test.hbs) | node_modules/handlebarsjs-cli/index.js --body "$BODY" > "packages/$PACKAGE/test/tmp/test.html"
