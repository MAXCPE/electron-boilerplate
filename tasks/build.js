/**
 * BUILD COMMANDS
 */

const gulp = require('gulp')
const exec = require('child_process').exec

// Creates the build folder by default
gulp.task('default', ['build'])

// Copy what is needed to build the application
gulp.task('build', ['build-assets', 'build-main', 'build-render', 'build-store', 'build-views', 'build-node-files', 'build-node-modules'])

gulp.task('build-assets', () => {
    gulp.src(['assets/**/*.*', '!assets/sass/*.*', '!assets/js/*.*', '!assets/css/*.*'])
        .pipe(gulp.dest('./build/assets'))
})

gulp.task('build-main', () => {
    gulp.src('mainProcess/**/*.*')
        .pipe(gulp.dest('build/mainProcess'))
})

gulp.task('build-render', () => {
    gulp.src('renderProcess/**/*.*')
        .pipe(gulp.dest('build/renderProcess'))
})

gulp.task('build-store', () => {
    gulp.src('store/*.*')
        .pipe(gulp.dest('build/store'))
})

gulp.task('build-views', () => {
    gulp.src('views.min/*.*')
        .pipe(gulp.dest('build/views.min'))
})

gulp.task('build-node-files', () => {
    gulp.src(['main.js', 'render.js', 'package.json'])
        .pipe(gulp.dest('build/'))
})

gulp.task('build-node-modules', () => {
    gulp.src('./node_modules/**/*.*')
        .pipe(gulp.dest('./build/node_modules'))
})

// Remove the unnecessary modules in the node_modules folder
gulp.task('prune', (cb) => {
    exec('cd build && npm prune --production && cd ..', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})

// Remove the build folder
gulp.task('rm-build', (cb) => {
    exec('rm -rf build/', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})