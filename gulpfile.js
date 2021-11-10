const  {series,  src, dest} = require("gulp")
const uglifycss = require("gulp-uglifycss")
const sass = require("gulp-sass")(require("sass"))





async function scss() {
    return src("./src/**/*.scss")
    .pipe(sass().once("error", sass.logError))
    .pipe(dest("./public/"))
}

 async function css() {
     await src("./public/*.css")
     .pipe(uglifycss({
         "uglyComments": true
     })).pipe(dest("./public"))
 }

exports.default = series(scss, css);





