// Load plugins
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var cssshrink        = require('gulp-cssshrink');
var livereload       = require('gulp-livereload');
var minifyCSS        = require('gulp-minify-css');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

// Prefix
gulp.task('prefix', ['styles'], function () {
  return gulp.src('css/avalanche.css')
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

// Minify
gulp.task('minify', ['prefix'], function () {
  return gulp.src('css/avalanche.css')
    .pipe(minifyCSS())
    .pipe(cssshrink())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'prefix', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});