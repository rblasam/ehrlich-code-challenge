const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'));
const themeKit = require('@shopify/themekit')

gulp.task('convert-sass', async function () {
    return await gulp.src('src/css/main.scss').pipe(sass()).pipe(gulp.dest('assets'));
})

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.scss', gulp.series('convert-sass'))
    themeKit.command('watch', { env: 'development', 'allow-live': true })
})