'use strict'

const gulp = require('gulp')
const scripts = require('./scripts')
const styles = require('./styles')

module.exports = gulp.parallel([scripts, styles])
