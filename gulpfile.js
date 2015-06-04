'use strict';

var gulp = require('gulp'),
    // TODO maybe figure out gulp-watch with browserify — whatever
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    qunit = require('gulp-qunit');

var debug = true;

// Static server + watching scss/html
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './public'
    }) ;

    gulp.watch('./public/**/*.js', ['browserify']).on('change', browserSync.reload);
    gulp.watch('./public/styles/sass/*.scss', ['sass']);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
});

// compile sass into css & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src('./public/styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('browserify', function() {
    return gulp.src(['./public/js/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: debug
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./public/js'));

});

gulp.task('test', function() {
    return gulp.src('./public/js/test.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: debug
        }))
        .pipe(rename('testSuite.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['test', 'browserify', 'serve']);

gulp.task('build', ['sass', 'test', 'browserify']);