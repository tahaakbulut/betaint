const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
var csso = require('gulp-csso');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const minify = require('gulp-minify');

function html() {
    return gulp.src('app/html/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function style() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
}

function js() {
    return gulp.src([
        'app/js/jquery-3.5.1.js',
        'app/js/popper.js',
        'app/js/bootstrap.js',
        'app/js/queryloader2.js',
        'app/js/tiny-slider.js',
        'app/js/select2.js',
        'app/js/tr.js',
        'app/js/layout.js',
        'app/js/index.js',
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js', { sourcemaps: true }))
        .pipe(browserSync.stream())
}

function img() {
    return gulp.src('app/images/*', { sourcemaps: true })
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream())
}
function font() {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream())
}
function watch() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch('app/scss/**/*.scss', style)
    //gulp.watch('app/*.html').on('change', browserSync.reload)
    gulp.watch('app/html/**/*.html', html)
    gulp.watch('app/js/**/*.js', js)
}

exports.js = js
exports.html = html
exports.style = style
exports.img = img
exports.font = font
exports.watch = watch
exports.default = gulp.parallel(html, js, style, img, font, watch);
