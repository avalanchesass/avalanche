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
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

// Minify
gulp.task('minify', ['styles'], function () {
  return gulp.src('dist/avalanche.css')
    .pipe(minifyCSS())
    .pipe(cssshrink())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

// Watch
gulp.task('watch', function () {
  gulp.watch('src/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});