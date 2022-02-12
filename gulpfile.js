const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const stylesSource = 'src/styles/**/*.scss'

const compileStyles = () => src(stylesSource).pipe(sass()).pipe(dest('css'))

const watchTask = () => watch([stylesSource], compileStyles)

exports.default = series(compileStyles, watchTask)
