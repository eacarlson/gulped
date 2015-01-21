var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var serve = require('gulp-serve');

gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));
})

gulp.task('serve', serve({
  root: ['public'],
  port:1337
}))

gulp.task('move', function() {
  gulp.src('./src/index.html').pipe(gulp.dest('./public'));
  gulp.src('./src/css/**').pipe(gulp.dest('./public/css'));
  gulp.src('./src/img/**').pipe(gulp.dest('./public/img'));
})

gulp.task('default', ['scripts', 'move', 'serve'], function() {
  gulp.watch('./src/js/*.js', ['scripts']);
})
