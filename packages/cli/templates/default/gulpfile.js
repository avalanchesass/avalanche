const autoprefixer = require(`gulp-autoprefixer`);
const browserSync = require(`browser-sync`);
const cleancss = require(`gulp-cleancss`);
const gulp = require(`gulp`);
const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const rename = require(`gulp-rename`);
const sass = require(`gulp-sass`);
const sourcemaps = require(`gulp-sourcemaps`);

gulp.task(`serve`, () => {
  browserSync.init({
    server: {
      baseDir: `app`,
    },
  });

  gulp.watch(`scss/**/*.scss`, [`sass`]);
  gulp.watch(`app/**/*.html`).on(`change`, browserSync.reload);
});

gulp.task(`sass`, () =>
  gulp.src(`scss/**/*.scss`)
    .pipe(sourcemaps.init())
      .pipe(sass({
        importer: nodeSassMagicImporter(),
      }).on(`error`, sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write({ sourceRoot: `/scss` }))
    .pipe(gulp.dest(`app/css`))
    .pipe(rename((originalPath) => {
      // eslint-disable-next-line no-param-reassign
      originalPath.basename += `.min`;
    }))
    .pipe(cleancss())
    .pipe(gulp.dest(`app/css`))
    .pipe(browserSync.stream())
);

gulp.task(`default`, [`serve`]);
