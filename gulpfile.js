'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static server + watching scss/html
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './'
    }) ;

    gulp.watch('./styles/sass/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// compile sass into css & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src('./styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);