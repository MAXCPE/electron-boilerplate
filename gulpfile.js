const gulp = require('gulp')

require('./tasks/build')
require('./tasks/run')
require('./tasks/JS')
require('./tasks/CSS')
require('./tasks/SASS')
require('./tasks/HTML')

// JS: Transpile the file then uglifies it
// CSS: Minify files
// HTML: Minify files
gulp.task('minify', ['minify-js', 'minify-css', 'minify-html'])
