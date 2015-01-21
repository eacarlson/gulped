var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./public/js'))
})
