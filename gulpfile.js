var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jscs = require('gulp-jscs');

gulp.task('compress', function() {
    return gulp.src('js/*.js')
        .pipe(concat('service.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function() {
    return gulp.src('js/main.js')
        .pipe(jscs());
        //.pipe(jscs.reporter());
});