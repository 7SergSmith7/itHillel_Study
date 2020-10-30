const { series, parallel, src, dest, watch } = require("gulp");

const concat = require("gulp-concat");
const clean = require("gulp-clean");

function copyHtml() {
  return src("./src/html/index.html").pipe(dest("./dist"));
}

function copyJs() {
  return src("./src/js/**/*.js").pipe(concat("app.js")).pipe(dest("./dist/js"));
}

function copyCss() {
  return src("./src/css/*.css")
    .pipe(concat("styles.css"))
    .pipe(dest("./dist/css"));
}
function copyVendorCss() {
  return src("./src/css/vendor/*.css")
    .pipe(concat("vendors.css"))
    .pipe(dest("./dist/css"));
}

function copyVendorJs() {
  return src(["./node_modules/jquery/dist/jquery.min.js"])
    .pipe(concat("vendors.js"))
    .pipe(dest("./dist/js"));
}

function watchFiles() {
  watch("./src/js/**/*.js", function rebuild() {
    return copyJs();
  });
  watch("./src/css/*.css", function rebuild() {
    return copyCss();
  });
  watch("./src/html/*.html", function rebuild() {
    return copyHtml();
  });
}

function cleanDist() {
  return src("./dist/", { read: false }).pipe(clean());
}
module.exports = {
  build: series(
    cleanDist,
    copyHtml,
    copyJs,
    copyCss,
    copyVendorJs,
    copyVendorCss
  ),
  serve: series(
    cleanDist,
    copyHtml,
    copyJs,
    copyCss,
    copyVendorJs,
    copyVendorCss,

    watchFiles
  ),
};
