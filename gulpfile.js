'use strict';

const gulp = require('gulp');
const pleeease = require('gulp-pleeease');

gulp.task('style', () => {
  return gulp.src('templates/pirum.scss')
    .pipe(pleeease({
      sass: {
        includePaths: [
          './node_modules/Honoka/scss',
          './node_modules/bootstrap-sass/assets/stylesheets',
        ]
      },
      out: 'pirum.css'
    }))
    .pipe(gulp.dest('templates'));
});

gulp.task('watch', () => {
  gulp.watch('templates/**/*.scss', ['style']);
});

gulp.task('default', ['style']);
