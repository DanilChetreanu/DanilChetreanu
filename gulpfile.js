var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

function css_style(done) {

gulp.src('./scss/styles.scss')
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(rename({suffix: '.min'}))
  .pipe( gulp.dest('./css/') );

  done();
}

gulp.task(css_style);

// exports.default = defaultSomeTask;
