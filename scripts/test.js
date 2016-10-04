const path = require('path');

const getDirectories = require(path.join(__dirname, '_get-directories.js'));
const buildTestCss = require(path.join(__dirname, '_build-test-css.js'));

const packages = getDirectories('packages');

packages.forEach((packageName) => {
  buildTestCss(packageName);
});

// # Build HTML
// BODY=$(cat "$f/test/body.html")
// echo $(cat test/test.html.template) | node_modules/handlebarsjs-cli/index.js --body "$BODY" > "$f/test/tmp/test.html"
// # Test
// ( cd "$f" && ../../node_modules/backstopjs/cli/index.js test --configPath=../../backstop.json )
// # Cleanup
// rm -Rf "$f/test/tmp"
