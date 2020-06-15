const { series, src, dest } = require('gulp')
const del = require('delete')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')

function clean(cb) {
  del(['dist/'], cb);
}

function build() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/'))
    .pipe(src('db.json'))
    .pipe(dest('dist/'));
}

exports.build = build;
exports.default = series(clean, build);