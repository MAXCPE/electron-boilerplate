/**
 * JS COMMANDS
 */

const gulp = require('gulp')
const exec = require('child_process').exec
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

gulp.task('minify-js', ['babel', 'uglify', 'rename-js', 'remove-js'])

// Add what is required to uglify the AngularJS file
gulp.task('babel', () => {
    return gulp.src('assets/js/app.js')
        .pipe(babel())
        .pipe(gulp.dest('babel'))
})

// Compress the AngularJS file
gulp.task('uglify', ['babel'], () => {
    return gulp.src('babel/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js.min.torename/'))
})

// Rename the AngularJS file
gulp.task('rename-js', ['uglify'], () => {
    gulp.src('assets/js.min.torename/*.js')
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('assets/js.min/'))
})

// Remove the temporary JS minified folder
gulp.task('remove-js', ['rename-js'], (cb) => {
    exec('rm -rf assets/js.min.torename && rm -rf babel/', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})
