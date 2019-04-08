"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("sass", function () {
gulp.src("app/scss/**/*.scss")
 .pipe(sass().on("error", sass.logError))
 .pipe(gulp.dest("app/scss/"));
 });

//compile and watch
 gulp.task("sass:watch", function() {
 gulp.watch("app/scss/**/*.scss", ["sass"]);
});

var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */

gulp.task('deploy', function () {
    return gulp.src("./prod/**/*")
      .pipe(deploy({ 
        remoteUrl: "https://github.com/mfanjaud/mfanjaud.github.io.git",
        branch: "master"
      }))
  });