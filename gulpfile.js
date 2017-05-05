'use strict'

const gulp = require('gulp')
const tasks = require('./_tasks/index')

gulp.task('default', gulp.series([
  tasks.generate,
  tasks.assets
]))
