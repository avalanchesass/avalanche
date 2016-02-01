/**
 * Configuration
 */
var config = {
  styles: {
    destination: 'css',
    fileName: 'avalanche.css',
    extractDestination: 'css-extract',
    watchDirectories: ['scss/**/*']
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
var fs           = require('fs');
var del          = require('del');
var eyeglass     = require('eyeglass');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssGlobbing  = require('gulp-css-globbing');
var cssnano      = require('gulp-cssnano');
var livereload   = require('gulp-livereload');
var minifyCss    = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var replace      = require('gulp-replace');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

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
    .pipe(gulp.dest(config.styles.destination))
    .pipe(livereload());
});

gulp.task('styles:extract', ['clean:styles:extract', 'styles:minify'], function () {
  fs.readFile(config.styles.destination + '/' + config.styles.fileName, 'utf8', function (error, data) {
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
  stylesMinify(config.styles.destination + '/' + config.styles.fileName, config.styles.destination);
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
    .pipe(livereload());
}

/**
 * Style guide
 *
 * Create a mdcss style guide.
 */
gulp.task('style_guide', ['styles:minify'], function () {
  return gulp.src(config.styles.destination + '/' + config.styles.fileName)
    .pipe(postcss([
      require('mdcss')({
        theme: require('mdcss-theme-github')({
          logo: '../avalanche-logo.svg',
          examples: {
            css: ['../' + config.styles.destination + '/' + config.styles.fileName],
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
    // Remove everything inside the `css` directory, except ...
    config.styles.destination + '/**/*',
    // ... the `extract` directory.
    '!' + config.styles.extractDestination,
    '!' + config.styles.extractDestination + '/**/*'
  ]);
});

gulp.task('clean:styles:extract', function () {
  return del([
    config.styles.extractDestination + '/**/*'
  ]);
});

/**
 * Watch
 */
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(config.styles.watchDirectories, ['styles:minify']);
});

gulp.task('watch:extract', function () {
  livereload.listen();
  gulp.watch(config.styles.watchDirectories, ['styles:extract']);
});

gulp.task('watch:style_guide', function () {
  livereload.listen();
  gulp.watch(config.styles.watchDirectories, ['style_guide']);
});

/**
 * Default task
 *
 * Run this task with `gulp`.
 */
gulp.task('default', function () {
  gulp.start('watch');
});
