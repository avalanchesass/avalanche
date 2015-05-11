// Load plugins
var del              = require('del');
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var bower            = require('gulp-bower');
var conflict         = require('gulp-conflict');
var cssGlobbing      = require('gulp-css-globbing');
var csso             = require('gulp-csso');
var livereload       = require('gulp-livereload');
var pixrem           = require('gulp-pixrem');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.scss'],
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(sourcemaps.init())
      .pipe(sass({ precision: 7, errLogToConsole: true }))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

// Minify
gulp.task('minify', ['styles'], function () {
  return gulp.src('css/avalanche.css')
    .pipe(csso())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(pixrem())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Bower
gulp.task('bower', function () {
  gulp.start('move');
  return bower();
});

// Inject
gulp.task('move', ['bower'], function () {
  gulp.start('clean:vendor');
  return gulp.src('vendor/avalanche_*/scss/*.scss')
    .pipe(rename(function (path) {
      var packageType = path.dirname
        .replace('avalanche_', '')
        .replace(path.basename, '')
        .replace('/scss', '');
      path.dirname = '/' + packageType;
    }))
    .pipe(conflict('scss'))
    .pipe(gulp.dest('scss'));
});

// Clean:vendor
gulp.task('clean:vendor', ['move'], function () {
  // Remove avalanche packages from the vendor folder
  // the timeput function is a ugly hack to prevent to early deleting of the package files
  setTimeout(function () {
    del([
      'vendor/avalanche_*'
    ]);
  }, 2000);
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});
