'use strict'

const gulp = require('gulp')
const partials = require('./partials')
const pages = require('./pages')
const posts = require('./posts')

module.exports = gulp.parallel([partials, pages, posts])
