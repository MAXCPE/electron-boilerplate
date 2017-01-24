/**
 * CSS COMMANDS
 */

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const exec = require('child_process').exec

gulp.task('minify-css', ['clean-css', 'rename-css', 'move-fa', 'remove-css'])

// Clean the CSS files
gulp.task('clean-css', () => {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css.min.torename/'))
})

// Rename the CSS files
gulp.task('rename-css', ['clean-css'], () => {
    gulp.src(['assets/css.min.torename/*.css', '!assets/css.min.torename/font-awesome.min.css'])
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('assets/css.min/'))
})

// Move Font-Awesome file
gulp.task('move-fa', ['clean-css'], (cb) => {
    exec('mv assets/css.min.torename/font-awesome.min.css assets/css.min/', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})

// Remove the temporary CSS minified folder
gulp.task('remove-css', ['rename-css', 'move-fa'], (cb) => {
    exec('rm -rf assets/css.min.torename', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})