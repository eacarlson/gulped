var gulp = require('gulp')
  , concat = require('gulp-concat')    // Stick files together
  , uglify = require('gulp-uglify')    // Minify css & js
  , serve = require('gulp-serve');     // Serve our site

gulp.task('scripts', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(concat('main.js'))           // Collapse to one file
    .pipe(uglify({mangle:false}))      // Mangle will rename variables
    .pipe(gulp.dest('./public/js'))    // Output to FS
});

gulp.task('move', function () {  
  /***
    A fully fleshed out gulpfile would optimize 
    each of these file types in a separate task
  ***/
  gulp.src('./src/css/**').pipe(gulp.dest('./public/css'));
  gulp.src('./src/img/**').pipe(gulp.dest('./public/img'));
  gulp.src('./src/index.html').pipe(gulp.dest('./public'));
});

// Serve the public directory
gulp.task('serve', serve({
    root: ['public'],
    port: 1337
}));

gulp.task('default', ['move', 'scripts', 'serve'], function(){
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/**', ['move']);
});
