'use strict'

const path = require('path')
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const jscs = require('gulp-jscs')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')

const { scripts, dist } = require('../../paths.json')

function lintScripts() {

  return gulp.src(scripts.glob)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    // .pipe(jscs({ fix: true }))
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    .pipe(gulp.dest(scripts.dir))
}

function buildScripts() {

  return gulp.src(scripts.glob)
    .pipe(sourcemaps.init())
    // .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(dist.dir, 'js/')))
}

// module.exports = gulp.series([lintScripts, buildScripts])
module.exports = buildScripts
