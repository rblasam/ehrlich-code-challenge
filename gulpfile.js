const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'));

gulp.task('convert-sass', async function () {
    return await gulp.src('src/css/main.scss').pipe(sass()).pipe(gulp.dest('assets/custom-style.css'));
})

gulp.task('watch', function () {
    gulp.watch('src/css/main.scss', gulp.series('convert-sass'))
})