const autoprefixer = require(`gulp-autoprefixer`);
const browserSync = require(`browser-sync`);
const cleancss = require(`gulp-cleancss`);
const del = require(`del`);
const gulp = require(`gulp`);
const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const rename = require(`gulp-rename`);
const sass = require(`gulp-sass`);
const sourcemaps = require(`gulp-sourcemaps`);

const stylesDestDirectory = `app/css`;

gulp.task(`serve`, () => {
  browserSync.init({
    server: {
      baseDir: `app`,
    },
  });

  gulp.watch(`scss/**/*.scss`, [`styles`]);
  gulp.watch(`app/**/*.html`).on(`change`, browserSync.reload);
});

gulp.task(`styles`, [`clean:styles`], () =>
  gulp.src(`scss/**/*.scss`)
    .pipe(sourcemaps.init())
      .pipe(sass({
        importer: nodeSassMagicImporter(),
      }).on(`error`, sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write({ sourceRoot: `/scss` }))
    .pipe(gulp.dest(stylesDestDirectory))
    .pipe(browserSync.stream())
);

gulp.task(`styles:minify`, () =>
  gulp.src(`app/css/**/*.css`)
    .pipe(rename((originalPath) => {
      // eslint-disable-next-line no-param-reassign
      originalPath.basename += `.min`;
    }))
    .pipe(cleancss())
    .pipe(gulp.dest(stylesDestDirectory))
    .pipe(browserSync.stream())
);

gulp.task(`clean:styles`, () => del(stylesDestDirectory));

gulp.task(`default`, [`serve`]);
