// Load plugins
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var clean        = require('gulp-clean');
var gutil        = require('gulp-util');
var livereload   = require('gulp-livereload');

// Styles
gulp.task('styles', function () {
  return gulp.src('src/avalanche.scss')
    .pipe(sass({ style: 'compact', precision: 7, sourcemap: true }))
    .on('error', gutil.log)
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
    .on('error', gutil.log)
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

// Clean
gulp.task('clean', function () {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

// Watch
gulp.task('watch', function () {
  // Watch .scss files
  gulp.watch('src/**/*.scss', ['styles']);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('styles');
});