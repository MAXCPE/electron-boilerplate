/**
 * SASS COMMANDS
 */

const gulp = require('gulp')
const sass = require('gulp-sass')

// Compile the sass files into css
gulp.task('sass', () => {
    return gulp.src('./assets/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
})

// Watch the sass task
gulp.task('sass:watch', () => {
    gulp.watch('./assets/sass/*.sass', ['sass'])
})
