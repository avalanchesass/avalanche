#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/_build-test-parameter.sh"

BODY=$(cat "packages/$PACKAGE/test/test.hbs")
echo $(cat test/templates/test.hbs) | node_modules/handlebars-cmd/index.js --body "$BODY" > "packages/$PACKAGE/test/tmp/test.html"
