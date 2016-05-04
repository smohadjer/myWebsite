var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch('app/resources/css/*', ['sass']);
});

gulp.task('sass', function () {
	var stream = gulp.src('app/resources/css/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/resources/css'));
	return stream;
});

gulp.task('connect', function() {
  connect.server({
	  port: 8080,
	  root: 'app'
  });
});

// serve development templates
gulp.task('serve', ['connect', 'sass', 'watch']);
