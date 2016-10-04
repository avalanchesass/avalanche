const sass = require('node-sass');
const magicImporter = require('node-sass-magic-importer');
const path = require('path');
const postcss  = require('postcss');
const postcssScssSyntax  = require('postcss-scss');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

module.exports = (packageName) => {
  const testPath = path.join(process.cwd(), 'packages', packageName, 'test');
  const tmpPath = path.join(testPath, 'tmp');
  const scssFile = path.join(testPath, 'test.scss');

  let css = sass.renderSync({
    file: scssFile
  }).css.toString();
  css = postcss(autoprefixer).process(css, { syntax: postcssScssSyntax }).css;

  try {
    fs.mkdirSync(tmpPath);
  } catch (error) {}
  fs.writeFileSync(path.join(tmpPath, 'test.css'), css);
};
