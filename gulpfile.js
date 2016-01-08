var fs           = require('fs');
var del          = require('del');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssGlobbing  = require('gulp-css-globbing');
var cssnano      = require('gulp-cssnano');
var livereload   = require('gulp-livereload');
var minifyCss    = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var replace      = require('gulp-replace');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

/**
 * Styles
 */
gulp.task('styles:build', ['clean:styles'], function () {
  // Find avalanche packages inside the bower dependencies folder which are
  // overriden by custom implementations inside the project scss directory
  // and exclude those packages from the build process.
  var folderFilters = [];
  var packageTypes = fs.readdirSync('scss');
  // Find package types.
  for (var key in packageTypes) {
    var packageType = packageTypes[key];
    if (packageType.indexOf('.scss') === -1) {
      // Find packages.
      var packages = fs.readdirSync('scss/' + packageType);
      for (var key in packages) {
        var packageName = packages[key];
        if (packageName.indexOf('.scss') !== -1) {
          packageName = packageName.replace(/^_/, '').replace('.scss', '');
          // Add found packages to a list of bower packages that should be
          // ignored because they are overriden by custom implementations.
          folderFilters.push('../vendor/avalanche_' + packageType + '_' + packageName + '/scss');
        }
      }
    }
  }

  return gulp.src('scss/**/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.scss'],
      ignoreFolders: folderFilters,
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(sourcemaps.init())
      .pipe(sass({ precision: 7, errLogToConsole: true }))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('styles:extract', ['clean:styles:extract'], function () {
  fs.readFile('css/avalanche.css', 'utf8', function (err, data) {
    if (err) throw err;

    var files = {};
    var extractRegExp = /\/\* extract\=(.*?) \*\/((.|\n)*?)\/\* end extract \*\//g;

    // Find extract placeholders in the CSS file.
    while (match = extractRegExp.exec(data)) {
      var extractFileName = match[1];
      var extractFileData = match[0];
      if (!files[extractFileName]) {
        files[extractFileName] = '';
      }
      // Append the file data if it already exists.
      files[extractFileName] += extractFileData;
    }

    for (var fileName in files) {
      var fileData = files[fileName];
      var fileDir = 'css/extract';
      var filePath = fileDir + '/' + fileName;
      // Create directory if it doesn't exist.
      if (!fs.existsSync(fileDir)){
        fs.mkdirSync(fileDir);
      }
      // Create the file.
      fs.openSync(filePath, 'w');
      fs.writeFileSync(filePath, fileData);
      // Create a minified version of the file.
      stylesMinify(filePath, fileDir);
    }
  });
});

gulp.task('styles:minify', ['styles:build'], function () {
  stylesMinify('css/avalanche.css', 'css');
});

function stylesMinify(files, dest) {
  return gulp.src(files)
    .pipe(minifyCss())
    .pipe(replace(/[^;\{]+:[^;\}]+;?\/\*\!remove\*\//g, ''))
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(dest))
    .pipe(livereload());
}

/**
 * Style guide
 *
 * Create an mdcss style guide.
 */
gulp.task('style_guide', ['styles:minify'], function () {
  return gulp.src('css/avalanche.css')
    .pipe(postcss([
      require('mdcss')({
        theme: require('mdcss-theme-github')({
          logo: '../avalanche-logo.svg',
          examples: {
            css: ['../vendor/normalize.css/normalize.css', '../css/avalanche.css'],
            htmlcss: '',
            bodycss: ''
          }
        }),
        destination: 'style-guide'
      })
    ]));
});

/**
 * Clean
 *
 * Remove compiled files before regenerating them.
 */
gulp.task('clean:styles', function () {
  return del([
    // Remove everything inside the `css` directory, except ...
    'css/**/*',
    // ... the `extract` directory.
    '!css/extract',
    '!css/extract/**/*'
  ]);
});

gulp.task('clean:styles:extract', function () {
  return del([
    'css/extract/**/*'
  ]);
});

/**
 * Watch
 */
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['scss/**/*', 'vendor/avalanche_*/**/*'], ['styles:minify']);
});

gulp.task('watch:style_guide', function () {
  livereload.listen();
  gulp.watch(['scss/**/*', 'vendor/avalanche_*/**/*'], ['style_guide']);
});

/**
 * Default task
 *
 * Run this task with `gulp`.
 */
gulp.task('default', function () {
  gulp.start('watch');
});
