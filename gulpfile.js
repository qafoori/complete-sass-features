const { src, dest, watch, series } = require('gulp')
const purgeCSS = require('gulp-purgecss')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))

const stylesSource = 'src/styles/**/*.scss'
const htmlSource = 'src/**/*.html'

const compileStyles = () =>
  src(stylesSource)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(purgeCSS({ content: [htmlSource] }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(dest('css'))

const watchTask = () => watch([stylesSource, htmlSource], compileStyles)

exports.default = series(compileStyles, watchTask)
