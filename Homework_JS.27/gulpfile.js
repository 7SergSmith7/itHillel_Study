const { series, parallel, src, dest } = require("gulp");

const concat = require("gulp-concat");
const clean = require("gulp-clean");

function copyHtml() {
  return src("./src/html/index.html").pipe(dest("./dist"));
}

function copyJs() {
  return src("./src/js/*.js").pipe(concat("app.js")).pipe(dest("./dist/js"));
}

function copyImg() {
  return src("./src/**/*.svg").pipe(dest("./dist"));
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
  return src([
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/jquery-ui/build/release.js",
    //  "./src/js/vendor/*.js",
  ])
    .pipe(concat("vendors.js"))
    .pipe(dest("./dist/js"));
}

function cleanDist() {
  return src("./dist", { read: false }).pipe(clean());
}
module.exports = {
  build: series(
    cleanDist,
    copyHtml,
    copyJs,
    copyCss,
    copyVendorJs,
    copyVendorCss,
    copyImg
  ),
};
