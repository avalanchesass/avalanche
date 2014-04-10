// Load plugins
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint       = require('gulp-jshint');
var rename       = require('gulp-rename');
var clean        = require('gulp-clean');
var gutil        = require('gulp-util');
var livereload   = require('gulp-livereload');

// Styles
gulp.task('styles', function () {
  return gulp.src('sass/septem.scss')
    .pipe(sass({ style: 'expanded', precision: 7, sourcemap: true }))
    .on('error', gutil.log)
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
    .on('error', gutil.log)
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Scripts
//gulp.task('scripts', function() {
//  return gulp.src('src/scripts/**/*.js')
/*    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});*/

// Clean
gulp.task('clean', function () {
  return gulp.src(['css'/*, 'dist/scripts'*/], {read: false})
    .pipe(clean());
});

// Watch
gulp.task('watch', function () {
  // Watch .scss files
  gulp.watch('sass/*.scss', ['styles']);

  // Watch .js files
  //gulp.watch('src/scripts/**/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('styles'/*, 'scripts'*/);
});