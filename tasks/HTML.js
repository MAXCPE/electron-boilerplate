/**
 * HTML COMMANDS
 */

const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')

gulp.task('minify-html', () => {
    return gulp.src('views/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('views.min'))
})
