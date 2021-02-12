const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const fs = require('fs');
const gulp = require('gulp');
const scss = require('gulp-sass');
const include = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const path = require('path');
const concat = require('gulp-concat');

const getFolders = (dir) => {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('pug', () => {
    return gulp.src('./src/track*/pug/*.pug')
        .pipe(pug())
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename((p) => ({
          dirname: p.basename,
          basename: 'index',
          extname: p.extname
        })))
        .pipe(gulp.dest('./build'));
});

gulp.task('scss', () => {
    return gulp.src('./src/track*/scss/track*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gcmq())
        .pipe(autoprefixer({
            cascade: false
        }))
        // .pipe(cleanCSS({compatibility: 'ie9', advanced: false}))
        .pipe(rename((p) => ({
          dirname: `${p.basename}/styles`,
          basename: 'styles',
          extname: p.extname
        })))

    .pipe(gulp.dest('./build'));
});

gulp.task('all-css', async () => {
    return gulp.src(['./src/track*/scss/current.scss', './src/common/scss/index.scss'])
        .pipe(scss().on('error', scss.logError))
        // .pipe(concat('styles.css'))
        .pipe(gcmq())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename((p) => {
          return ({
            dirname: '/styles',
            basename: p.dirname === '.' ? 'styles' : p.dirname.replace('track-', '').replace('/scss', ''),
            extname: p.extname
          })
        }))

    .pipe(gulp.dest('./build'));
});

gulp.task('all-scripts', async () => {
    return gulp.src(['./src/track*/scripts/*.js', './src/common/scripts/index.js'])
        // .pipe(uglify())
        // .pipe(concat('index.js'))
        .pipe(rename((p) => {
          // console.log('p', p);
          return ({
            dirname: '/scripts',
            basename: p.dirname === '.' ? p.basename : p.dirname.replace('track-', '').replace('/', '-').replace('-scripts', ''),
            extname: p.extname
          })
        }))

    .pipe(gulp.dest('./build'));
});

gulp.task('all-images', async () => {
    return gulp.src(['./src/track*/images/*', './src/common/images/*'])
        // .pipe(uglify())
        .pipe(rename((p) => ({
          dirname: '/images',
          basename: p.basename,
          extname: p.extname
        })))

    .pipe(gulp.dest('./build'));
});

gulp.task('moduleNiceSelect', async () => {
  const folders = getFolders('./build');
  return folders.map((folder) => {
      gulp
        .src('./src/common/scripts/jquery.nice-select.js')
        // .pipe(uglify())
        .pipe(rename((p) => ({
          dirname: `./${folder}/scripts`,
          basename: p.basename,
          extname: p.extname
        })))
        .pipe(gulp.dest('./build'));
    })
})

gulp.task('scripts', async () => {
  const folders = getFolders('./build');

  return folders.map((folder) => {
      gulp
        .src(['./src/common/scripts/index.js', `./src/${folder}/scripts/index.js`])
        // .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(rename((p) => ({
          dirname: `./${folder}/scripts`,
          basename: p.basename,
          extname: p.extname
        })))
        .pipe(gulp.dest('./build'));
    }
  )
});

gulp.task('images', () => {
    return gulp.src('./src/track*/images/*')
        .pipe(rename((p) => ({
          dirname: p.dirname,
          basename: p.basename,
          extname: p.extname
        })))
        .pipe(gulp.dest('./build'));
});

gulp.task('fonts', async() => {
    const folders = getFolders('./build');

    return folders.map((folder) => {
        gulp.src('./src/common/fonts/*')
            .pipe(rename((p) => ({
              dirname: `./${folder}/fonts`,
              basename: p.basename,
              extname: p.extname
            })))
            .pipe(gulp.dest('./build'));
    })
});

gulp.task('all-fonts', async() => {

    return gulp.src('./src/common/fonts/*')
            .pipe(rename((p) => ({
              dirname: '/fonts',
              basename: p.basename,
              extname: p.extname
            })))
            .pipe(gulp.dest('./build'));
});

gulp.task('common-images', async() => {
    const folders = getFolders('./build');

    return folders.map((folder) => {
        gulp.src('./src/common/images/*')
            .pipe(rename((p) => ({
                dirname: `./${folder}/images`,
                basename: p.basename,
                extname: p.extname
            })))
            .pipe(gulp.dest(`./build`));
    })
});

gulp.task('browser', (cb) => {
    browserSync.init({
        port: 3002,
        server: {
            baseDir: "./"
        },
        files: [
            'build/*.html'
        ],
        open: false,
        livereload: true,
        notify: false
    });
    cb();
});

gulp.task('watch', (cb) => {
    gulp.watch('src/**/*.scss', gulp.series('scss', 'pug'));
    gulp.watch('src/**/*.pug', gulp.series('pug'));
    gulp.watch('src/**/*.html', gulp.series('pug'));
    gulp.watch('src/**/*.png', gulp.series('images'));
    gulp.watch('src/**/*.png', gulp.series('common-images'));
    gulp.watch('src/**/fonts/*', gulp.series('fonts'));
    gulp.watch('src/**/scripts/*', gulp.series('scripts'));
    gulp.watch('src/**/*.*').on('change', browserSync.reload);
    cb();
});

gulp.task('start', gulp.series('scss', 'pug', 'images', 'common-images', 'fonts', 'moduleNiceSelect', 'scripts', 'watch', 'browser'));
gulp.task('build', gulp.series('pug', 'images', 'common-images', 'fonts', 'moduleNiceSelect', 'scripts', 'all-css', 'all-images', 'all-scripts', 'all-fonts'));
