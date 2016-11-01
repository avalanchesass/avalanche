#!/bin/sh
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/_build-test-parameter.sh"

node_modules/node-sass/bin/node-sass --importer node_modules/node-sass-magic-importer "packages/$PACKAGE/test/test.scss" | node_modules/postcss-cli/bin/postcss -u autoprefixer --autoprefixer.browsers "safari >= 4" -o "packages/$PACKAGE/test/tmp/test.css"
