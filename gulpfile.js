const { src, dest, series, parallel } = require("gulp");
// util
const gutil = require("gulp-util");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const concat = require("gulp-concat");
// css
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// img
const responsive = require("gulp-responsive");
const image = require("gulp-image");

function clean() {
  return del([
    "./dist/css/**/*",
    "./dist/js/**/*",
    "./dist/img/**/*",
  ]);
}

function css_fonts() {
  return src("./node_modules/typeface-quicksand/files/**/*")
    .pipe(dest("dist/css/files/"));
}

function css_postcss() {
  const stylesheets = [
    "./node_modules/normalize.css/normalize.css",
    "./node_modules/typeface-quicksand/index.css",
    "./src/css/base.css",
    "./src/css/styles.css",
  ];

  return src(stylesheets)
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.init())
      .pipe(concat("styles.min.css"))
      .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gutil.env.production ? gutil.noop() : sourcemaps.write("."))
    .pipe(dest("dist/css/"));
}

function js() {
  const scripts = [
    "./node_modules/vanilla-tilt/dist/vanilla-tilt.min.js",
    "./src/js/**/*.js",
  ];

  return src(scripts)
    .pipe(dest("dist/js/"));
}

function img() {
  const imageConfig = {
    svgo: false,
  };

  return src("./src/img/**/*")
    .pipe(responsive({
      "experience/*": {
        width: 72*2,
      },
    }, {
      errorOnUnusedImage: false,
      passThroughUnused: true,
      silent: true,
    }))
    .pipe(image(imageConfig))
    .pipe(dest("./dist/img/"));
}

exports.clean = clean;
exports.css = parallel(css_fonts, css_postcss);
exports.js = js;
exports.img = img;
exports.build = series(
  exports.clean,
  parallel(
    exports.css,
    exports.js,
    exports.img,
  ),
);
exports.default = exports.build;
