// Load plugins
var fs           = require('fs');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssGlobbing  = require('gulp-css-globbing');
var cssnano      = require('gulp-cssnano');
var livereload   = require('gulp-livereload');
var minifyCss    = require('gulp-minify-css');
var pixrem       = require('gulp-pixrem');
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  // Find avalanche packages inside the npm dependencies folder which are
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
          // Add found packages to a list of npm packages that should be ignored
          // because they are overriden by custom implementations.
          folderFilters.push('../node_modules/avalanche_' + packageType + '_' + packageName + '/scss');
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

// Minify
gulp.task('minify', ['styles'], function () {
  return gulp.src('css/avalanche.css')
    .pipe(minifyCss())
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(pixrem())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Watch
gulp.task('watch', function () {
  gulp.watch(['scss/**/*', 'node_modules/avalanche_*/**/*'], ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  livereload.listen();
  gulp.start('watch');
});
