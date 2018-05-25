const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('test', function () {
    gulp.src('src/**/*.ds')
        .pipe(babel())
        .pipe(gulp.dest('dst'));
});