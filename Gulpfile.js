const pug          = require('gulp-pug');
const gulp         = require('gulp');
const scss         = require('gulp-sass');
const include      = require('gulp-file-include');
const browserSync  = require('browser-sync').create();
const rename       = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const gcmq         = require('gulp-group-css-media-queries');

gulp.task('pug', () => {
    return gulp.src('./src/track*/pug/*.pug')
        .pipe(pug())
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(rename((p) => {
          return {
            dirname: '',
            basename: p.basename,
            extname: p.extname
          };
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('scss', () => {
    return gulp.src('./src/track*/scss/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gcmq())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename((p) => {
            return {
                dirname: '',
                basename: p.basename,
                extname: p.extname
            };
        }))
        .pipe(gulp.dest('./css'));
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
      notify: false
    });
    cb();
});

gulp.task('watch', (cb) => {

    gulp.watch('src/**/*.scss', gulp.series('scss', 'pug'));
    gulp.watch('src/**/*.pug', gulp.series('pug'));
    gulp.watch('src/**/*.html', gulp.series('pug'));
    cb();
});

gulp.task('default', gulp.series('scss', 'pug', 'watch', 'browser'));
