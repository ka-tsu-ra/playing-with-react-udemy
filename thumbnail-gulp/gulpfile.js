var gulp = require('gulp'); // Responsible for build process
var gutil = require('gulp-util'); // Console.logging out output of the build process on to the command line for debugging.
var source = require('vinyl-source-stream'); // Throws text files from one part of the build process to another.
var browserify = require('browserify'); // Figures out what part of code depends on other parts and ensuring load order is done properly.
var watchify = require('watchify'); // Automatically reruns the gulp file whenever there's a change in the code.
var reactify = require('reactify'); // Works in conjunction with browserify to convert .jsx files into .js

gulp.task('default', function() {
  // Create a bundler (object). It is responsible for running browserify on the code base.
  // It's the the object you actually use to run browserify on the code.
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'], // Point to file that is the starting point for the app. First file browserify will look to.
    transform: [reactify], // Tells browserify that while it's figuring out dependencies it also needs to compile .jsx to .js using the reactify module.
    extensions: ['.jsx'], // Files browserify needs to look at when it's doing the build process.
    debug: true, // Boilerplate
    cache: {}, // Boilerplate
    packageCache: {}, //  Boilerplate
    fullPaths: true // Boilerplate

  }));

// The bundler object doesn't do anything alone. The build function is what makes it do something.
// It tells the bundler to bundle.
  function build(file) {
    if (file) gutil.og('Recompiling' + file);
    return bundler
      .bundle() // tells bundler to go and bundle.
      .on('error', gutil.log.bind(gutil, 'Browserify Error')) // if there's any error during the bundling process, put the output on the console so we can debug.
      .pipe(source('main.js')) // After bundler has run, and all files converted to .js and put in the right order, put it all in a single file called main.js
      .pipe(gulp.dest('./')); // Put that main.js file in the current working directory.
  };
  build() // Immediately call build
  bundler.on('update', build) // Build again whenever a change is made to a file.
})
