/**
 * Configuration
 */
var config = {
  host: 'devbox.dev',
  directory: 'avalanche/template-project',
  styles: {
    destination: 'dist',
    destinationFileName: 'avalanche.css',
    extractDestination: 'dist-extract',
    watchDirectories: ['scss/**/*']
  },
  scripts: {
    destination: 'dist',
    destinationFileName: 'avalanche.js',
    browserifyEntries: ['js/avalanche.js'],
    watchDirectories: ['js/**/*']
  },
  styleGuide: {
    destination: 'style-guide'
  },
  sassOptions: {
    precision: 7
  }
};

/**
 * Plugins
 */
var browserSync  = require('browser-sync').create();
var browserify   = require('browserify');
var del          = require('del');
var eyeglass     = require('eyeglass');
var fs           = require('fs');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssGlobbing  = require('gulp-css-globbing');
var cssnano      = require('gulp-cssnano');
var minifyCss    = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var replace      = require('gulp-replace');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var buffer       = require('vinyl-buffer');
var source       = require('vinyl-source-stream');

/**
 * Styles
 */
gulp.task('styles:build', ['clean:styles'], function () {
  return gulp.src('scss/**/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.scss'],
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(eyeglass(config.sassOptions)).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(rename(config.styles.destinationFileName))
    .pipe(gulp.dest(config.styles.destination))
    .pipe(browserSync.stream());
});

gulp.task('styles:extract', ['clean:styles:extract', 'styles:minify'], function () {
  fs.readFile(config.styles.destination + '/' + config.styles.destinationFileName, 'utf8', function (error, data) {
    if (error) throw error;

    var files = stylesExtractFiles(data);

    for (var fileName in files) {
      var fileData = files[fileName];
      var fileDir = config.styles.extractDestination;
      var filePath = fileDir + '/' + fileName;
      // Create directory if it doesn't exist.
      if (!fs.existsSync(fileDir)){
        fs.mkdirSync(fileDir);
      }
      // Create the file.
      fs.openSync(filePath, 'w');
      fs.writeFileSync(filePath, fileData);
      // Create a minified version of the file.
      stylesMinify(filePath, fileDir);
    }
  });
});

gulp.task('styles:minify', ['styles:build'], function () {
  stylesMinify(config.styles.destination + '/' + config.styles.destinationFileName, config.styles.destination);
});

function stylesExtractFiles(data) {
  var files = {};
  var extractRegExp = /\/\* extract (.*?) \*\/((.|\n)*?)\/\* end extract \1 \*\//g;

  // Find extract placeholders in the CSS file.
  while (match = extractRegExp.exec(data)) {
    var extractFileName = match[1];
    var extractFileData = match[0].replace('/* extract ' + extractFileName + ' */', '').replace('/* end extract ' + extractFileName + ' */', '');
    if (!files[extractFileName]) {
      files[extractFileName] = '';
    }
    // Append the file data if it already exists.
    files[extractFileName] += extractFileData;

    // Find nested extraction placeholders.
    var nestedFiles = stylesExtractFiles(extractFileData);
    for (var nestedFileName in nestedFiles) {
      var nestedFileData = nestedFiles[nestedFileName];
      if (!files[nestedFileName]) {
        files[nestedFileName] = '';
      }
      files[nestedFileName] += nestedFileData;
    }
  }

  return files;
}

function stylesMinify(files, dest) {
  return gulp.src(files)
    .pipe(minifyCss())
    .pipe(replace(/[^;\{]+:[^;\}]+;?\/\*\!remove\*\//g, ''))
    .pipe(cssnano())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
}

/**
 * Scripts
 */
gulp.task('scripts:build', ['clean:scripts'], function () {
  // Set up the browserify instance.
  var b = browserify({
    entries: config.scripts.browserifyEntries,
    debug: true
  });

  return b.bundle()
    .pipe(source(config.scripts.destinationFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.scripts.destination))
    .pipe(browserSync.stream());
});

/**
 * Style guide
 *
 * Create a mdcss style guide.
 */
gulp.task('style_guide', ['styles:minify'], function () {
  return gulp.src(config.styles.destination + '/' + config.styles.destinationFileName)
    .pipe(postcss([
      require('mdcss')({
        theme: require('mdcss-theme-github')({
          logo: '../logo.svg',
          examples: {
            css: ['../' + config.styles.destination + '/' + config.styles.destinationFileName],
            bodyjs: ['../' + config.scripts.destination + '/' + config.scripts.destinationFileName],
            htmlcss: '',
            bodycss: ''
          }
        }),
        destination: config.styleGuide.destination
      })
    ]));
});

/**
 * Clean
 *
 * Remove compiled files before regenerating them.
 */
gulp.task('clean:styles', function () {
  return del([
    // Remove everything inside the destination direcotry.
    config.styles.destination + '/**/*.css',
    config.styles.destination + '/**/*.css.map'
  ]);
});

gulp.task('clean:scripts', function () {
  return del([
    // Remove everything inside the destination direcotry.
    config.styles.destination + '/**/*.js',
    config.styles.destination + '/**/*.js.map'
  ]);
});

gulp.task('clean:styles:extract', function () {
  return del([
    config.styles.extractDestination + '/**/*.css',
    config.styles.extractDestination + '/**/*.css.map'
  ]);
});

/**
 * Watch
 */
gulp.task('watch', function () {
  browserSync.init({
    proxy: config.host + '/' + config.directory
  });
  gulp.watch(config.styles.watchDirectories, ['styles:minify']);
  gulp.watch(config.scripts.watchDirectories, ['scripts:build']);
});

gulp.task('watch:extract', function () {
  browserSync.init({
    proxy: config.host + '/' + config.directory
  });
  gulp.watch(config.styles.watchDirectories, ['styles:extract']);
});

gulp.task('watch:style_guide', function () {
  browserSync.init({
    proxy: config.host + '/' + config.directory + '/' + config.styleGuide.destination
  });
  gulp.watch(config.styles.watchDirectories, ['style_guide']);
  gulp.watch(config.scripts.watchDirectories, ['scripts:build']);
  gulp.watch(config.styleGuide.destination + '/*.html').on('change', browserSync.reload);
});

/**
 * Default task
 *
 * Run this task with `gulp`.
 */
gulp.task('default', function () {
  gulp.start('watch');
});
