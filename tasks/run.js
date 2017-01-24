/**
 * RUN COMMANDS
 */

const gulp = require('gulp')
const exec = require('child_process').exec

// Run the electron app in the build folder
gulp.task('run', (cb) => {
    exec('electron ./build', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        cb(err)
    })
})
