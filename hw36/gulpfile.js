const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// cssmin
gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css')
    .pipe(concat('all.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

// jsmin
gulp.task('minify-js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// default task
gulp.task('default', gulp.parallel('minify-css', 'minify-js'));
