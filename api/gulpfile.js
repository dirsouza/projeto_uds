const { series, src, dest } = require('gulp')
const del = require('delete')
const babel = require('gulp-babel')
const terser = require('gulp-terser')

function clean(cb) {
  del(['dist/'], cb);
}

function build() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(terser())
    .pipe(dest('dist/'));
}

exports.build = build;
exports.default = series(clean, build);
