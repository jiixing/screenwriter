var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    react = require('gulp-react'),
    webserver = require('gulp-webserver');

gulp.task('default', function() {
	gulp.src('.')
		.pipe(webserver({
			livereload: true,
			open: true,
			fallback: 'index.html'
		}));
	gulp.watch('*.scss', ['sass']);
	gulp.watch('*.jsx', ['react']);
});
gulp.task('sass', function() {
	gulp.src('*.scss')
		.pipe(plumber())
		.pipe(sass({
			sourceComments: 'map'
		}))
		.pipe(gulp.dest('.'));
});
gulp.task('react', function() {
	gulp.src('*.jsx')
		.pipe(plumber())
		.pipe(react())
		.pipe(gulp.dest('.'));
});