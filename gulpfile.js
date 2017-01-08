/**
 * Created by admin on 2017/1/7.
 */
var gulp = require('gulp');

var paths = {
    home: ['src/home/scss/*', 'src/home/images/*']
};

gulp.task('css', function () {
    gulp.src([paths.home[0], 'src/base/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/home/css/'));
});