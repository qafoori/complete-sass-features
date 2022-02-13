const { src, dest, watch, series } = require('gulp')
const purgeCSS = require('gulp-purgecss')
const sass = require('gulp-sass')(require('sass'))

const stylesSource = 'src/styles/**/*.scss'
const htmlSource = 'src/**/*.html'

const compileStyles = () =>
  src(stylesSource)
    .pipe(sass())
    .pipe(purgeCSS({ content: [htmlSource] }))
    .pipe(dest('css'))

const watchTask = () => watch([stylesSource, htmlSource], compileStyles)

exports.default = series(compileStyles, watchTask)
