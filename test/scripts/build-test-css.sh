#!/bin/bash
set -e

DIR="$( cd "$( dirname $0 )" && pwd )"

. "$DIR/_build-test-parameter.sh"

( cd "packages/$PACKAGE" && ../../node_modules/.bin/node-sass "test/test.scss" --include-path "$DIR/../../packages/$PACKAGE/scss/test/sub/dir" | ../../node_modules/.bin/postcss -o "test/tmp/test.css" )
