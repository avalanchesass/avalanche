// Load plugins
var del              = require('del');
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
  gulp.start('move');
  return bower();
});

// Inject
gulp.task('move', ['bower'], function () {
  gulp.start('inject');
  gulp.start('clean:vendor');
  return gulp.src('vendor/avalanche_*/scss/*.scss')
    .pipe(rename(function (path) {
      var packageType = path.dirname
        .replace('avalanche_', '')
        .replace(path.basename, '')
        .replace('/scss', '');
      path.dirname = '/' + packageType;
    }))
    .pipe(gulp.dest('scss'));
});

// Inject
gulp.task('inject', ['move'], function () {
  var src = gulp.src('scss/avalanche.scss');

  packageTypes.forEach(function (packageType) {
    src.pipe(inject(gulp.src('scss/' + packageType + '/*.scss', { read: false }), {
      starttag: '/** inject: ' + packageType + ' **/',
      endtag: '/** endinject **/',
      transform: function (filepath, file, i, length) {
        return '@import \'' + filepath.substring(1).replace('scss/', '').replace('/_', '/').replace('.scss', '') + '\';';
      }
    }));
  });

  return src.pipe(gulp.dest('scss'));
});

// Clean:vendor
gulp.task('clean:vendor', ['move'], function () {
  // Remove avalanche packages from the vendor folder
  // the timeput function is a ugly hack to prevent to early deleting of the package files
  setTimeout(function () {
    del([
      'vendor/avalanche_*'
    ]);
  }, 200);
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});
