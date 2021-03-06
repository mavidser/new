var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    del = require('del');

// Styles
gulp.task('styles', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(plumber())
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('> 5%', 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});
 
// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/main.js')
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// Templates
gulp.task('templates', function() {
  return gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Templates task complete' }));
});
 
// Clean
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles','scripts','templates');
});
 
// Watch
gulp.task('watch', function() {
 
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
 
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);
 
  // Watch jade files
  gulp.watch('src/**/*.jade', ['templates']);
 
  // Create LiveReload server
  livereload.listen();
 
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
 
});

