// Load plugins
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var cssshrink        = require('gulp-cssshrink');
var livereload       = require('gulp-livereload');
var livingstyleguide = require('gulp-livingstyleguide');
var minifyCSS        = require('gulp-minify-css');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
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

// Styleguide
gulp.task('styleguide', function() {
  gulp.src('src/styleguide.lsg')
    .pipe(livingstyleguide())
    .pipe(gulp.dest('styleguide'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('src/**/*', ['styleguide'/*, 'styles', 'minify'*/]);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});