/**
 * Configuration
 */
var config = {
  packageNamespaces: ['avalanche'],
  packageTypes: ['function', 'system', 'mixin', 'base', 'utility', 'object', 'component'],
  stylesDestination: 'css',
  stylesFileName: 'avalanche.css',
  stylesExtractDestination: 'css-extract',
  stylesWatchDirectories: ['scss/**/*'],
  styleGuideDestination: 'style-guide',
  vendorDirectory: 'vendor'
};

for (var key in config.packageNamespaces) {
  var packageNamespace = config.packageNamespaces[key];
  config.stylesWatchDirectories.push(config.vendorDirectory + '/' + packageNamespace + '_*/**/*');
}

/**
 * Plugins
 */
var fs           = require('fs');
var del          = require('del');
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
  // Find avalanche packages inside the bower dependencies folder which are
  // overriden by custom implementations inside the project scss directory
  // and exclude those packages from the build process.
  var ignoreFolders = [];
  // Find packages of the various types.
  for (var key in config.packageTypes) {
    var packageType = config.packageTypes[key];
    var packages = fs.readdirSync('scss/' + packageType);
    for (var key in packages) {
      var packageName = packages[key];
      if (packageName.indexOf('.scss') !== -1) {
        packageName = packageName.replace(/^_/, '').replace('.scss', '');
        // Add found packages to a list of bower packages that should be
        // ignored because they are overridden by custom implementations.
        for (var key in config.packageNamespaces) {
          var packageNamespace = config.packageNamespaces[key];
          ignoreFolders.push('../' + config.vendorDirectory + '/' + packageNamespace + '_' + packageType + '_' + packageName + '/scss');
        }
      }
    }
  }

  return gulp.src('scss/**/*.scss')
    .pipe(cssGlobbing({
      extensions: ['.scss'],
      ignoreFolders: ignoreFolders,
      scssImportPath: {
        leading_underscore: false,
        filename_extension: false
      }
    }))
    .pipe(sourcemaps.init())
      .pipe(sass({ precision: 7, errLogToConsole: true }))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.stylesDestination))
    .pipe(livereload());
});

gulp.task('styles:extract', ['clean:styles:extract', 'styles:minify'], function () {
  fs.readFile(config.stylesDestination + '/' + config.stylesFileName, 'utf8', function (err, data) {
    if (err) throw err;

    var files = stylesExtractFiles(data);

    for (var fileName in files) {
      var fileData = files[fileName];
      var fileDir = config.stylesExtractDestination;
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
  stylesMinify(config.stylesDestination + '/' + config.stylesFileName, config.stylesDestination);
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
 * Create an mdcss style guide.
 */
gulp.task('style_guide', ['styles:minify'], function () {
  return gulp.src(config.stylesDestination + '/' + config.stylesFileName)
    .pipe(postcss([
      require('mdcss')({
        theme: require('mdcss-theme-github')({
          logo: '../avalanche-logo.svg',
          examples: {
            css: ['../' + config.vendorDirectory + '/normalize.css/normalize.css', '../' + config.stylesDestination + '/' + config.stylesFileName],
            htmlcss: '',
            bodycss: ''
          }
        }),
        destination: config.styleGuideDestination
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
    config.stylesDestination + '/**/*',
    // ... the `extract` directory.
    '!' + config.stylesExtractDestination,
    '!' + config.stylesExtractDestination + '/**/*'
  ]);
});

gulp.task('clean:styles:extract', function () {
  return del([
    config.stylesExtractDestination + '/**/*'
  ]);
});

/**
 * Watch
 */
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(config.stylesWatchDirectories, ['styles:minify']);
});

gulp.task('watch:extract', function () {
  livereload.listen();
  gulp.watch(config.stylesWatchDirectories, ['styles:extract']);
});

gulp.task('watch:style_guide', function () {
  livereload.listen();
  gulp.watch(config.stylesWatchDirectories, ['style_guide']);
});

/**
 * Default task
 *
 * Run this task with `gulp`.
 */
gulp.task('default', function () {
  gulp.start('watch');
});
