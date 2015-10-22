var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('src/**') // go into the src directory and load every file inside of it
    .pipe(react()) //built-in command to convert .jsx files into javascript files.
    .pipe(concat('application.js')) // concats all those files into a new file called application.js
    .pipe(gulp.dest('./')) // then save it in the destination in the argument i.e. currect working directory
});
