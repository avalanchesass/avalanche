// Load plugins
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var bower            = require('gulp-bower');
var csso             = require('gulp-csso');
var inject           = require('gulp-inject');
var livereload       = require('gulp-livereload');
var pixrem           = require('gulp-pixrem');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Define package types
var packageTypes = [
  'function',
  'system',
  'base',
  'utility',
  'object',
  'component'
];

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
    .pipe(pixrem())
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
  var src = gulp.src('scss/avalanche.scss');
  var packageSrc;

  packageTypes.forEach(function (packageType) {
    packageSrc = gulp.src('bower_components/avalanche_' + packageType + '_*/scss/*.scss', { read: false });

    src.pipe(inject(packageSrc, {
      starttag: '/** bower:' + packageType + ' **/',
      endtag: '/** endbower **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1) + '\';';
      }
    }));
  });

  return src.pipe(gulp.dest('scss'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});
