var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileinclude', (done) => {
  gulp.src(['templates/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('public'));
    done();
});
