// Load plugins
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var bower            = require('gulp-bower');
var csso             = require('gulp-csso');
var inject           = require('gulp-inject');
var livereload       = require('gulp-livereload');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
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
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

// Bower
gulp.task('bower', function () {
  gulp.start('inject');
  return bower();
});

// Inject
gulp.task('inject', ['bower'], function () {
  // Inject packages in avalanche.scss
  var functions  = gulp.src('bower_components/avalanche_function_*/scss/*.scss', { read: false });
  var utilities  = gulp.src('bower_components/avalanche_utility_*/scss/*.scss', { read: false });
  var objects    = gulp.src('bower_components/avalanche_object_*/scss/*.scss', { read: false });
  var components = gulp.src('bower_components/avalanche_component_*/scss/*.scss', { read: false });

  return gulp.src('scss/avalanche.scss')
    .pipe(inject(functions, {
      starttag: '/** inject:function **/',
      endtag: '/** endinject **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1) + '\';';
      }
    }))
    .pipe(inject(utilities, {
      starttag: '/** inject:utility **/',
      endtag: '/** endinject **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1) + '\';';
      }
    }))
    .pipe(inject(objects, {
      starttag: '/** inject:object **/',
      endtag: '/** endinject **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1) + '\';';
      }
    }))
    .pipe(inject(components, {
      starttag: '/** inject:component **/',
      endtag: '/** endinject **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1) + '\';';
      }
    }))
    .pipe(gulp.dest('scss'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});
