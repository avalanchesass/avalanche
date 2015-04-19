// Load plugins
var gulp             = require('gulp');
var autoprefixer     = require('gulp-autoprefixer');
var csso             = require('gulp-csso');
var livereload       = require('gulp-livereload');
var rename           = require('gulp-rename');
var sass             = require('gulp-sass');
var sourcemaps       = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ 'precision': 7, 'includePaths': ['bower_components'] }))
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

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*', ['styles', 'minify']);
});

// Default
gulp.task('default', function () {
  gulp.start('watch');
});

/**
 * Component loading
 *
 * Usage:
 * gulp avalanche-extend --utility name
 * gulp avalanche-extend --object name
 */
var download  = require('gulp-download');
var httpcheck = require('httpcheck');
var args      = require('yargs').argv;

gulp.task('avalanche-extend', function () {
  var branch = 'release-1.5';
  var baseUrl = 'https://cdn.rawgit.com/maoberlehner/avalanche_{type}_{arg}/' + branch + '/_{arg}.scss';

  var getExtension = function (extensionType, extensionName, extensionUrl, extensionDestination) {
    httpcheck({
      url: extensionUrl,
      log: function () {},
      check: function(res) {
        if (res && res.statusCode === 404) {
          console.error(extensionType + ' "' + extensionName + '" not found');
          return true;
        }
        download(extensionUrl).pipe(gulp.dest(extensionDestination));
        return false;
      }
    },
    function (err) {
      if (err) {
        throw err;
      }
    });
  };

  var utilityName;
  var utilityUrl;
  if (args.utility) {
    utilityName = args.utility;
    utilityUrl = baseUrl.replace('{type}', 'utility').replace(/\{arg\}/g, utilityName);
    getExtension('Utility', utilityName, utilityUrl, 'scss/utility/');
  }

  var objectName;
  var objectUrl;
  if (args.object) {
    objectName = args.object;
    objectUrl = baseUrl.replace('{type}', 'object').replace(/\{arg\}/g, objectName);
    getExtension('Utility', objectName, objectUrl, 'scss/object/');
  }
});
