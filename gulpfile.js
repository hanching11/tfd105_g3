const {
   src,
   dest,
   series,
   parallel,
   watch
} = require('gulp');

// 搬檔案
function package() {
   return src(['src/img/*.*', 'src/img/**/*.*']).pipe(dest('dist/img'))
}
const rename = require('gulp-rename');

exports.p = package;

// css minify
const cleanCSS = require('gulp-clean-css');

function minicss() {
   return src('src/*.css')
      .pipe(cleanCSS())
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(dest('dist/css'))
}

exports.c = minicss;


//  js minify ckeck 
const uglify = require('gulp-uglify');

function minijs() {
   return src(['src/js/*.js', 'src/js/**/*.js'])
      .pipe(uglify())
      .pipe(rename({
         extname: '.min.js' // 修改附檔名
         //prefix : 'web-' // 前綴字
         //suffix : '-min'  // 後綴字
         //basename : 'all' //更名
      }))
      .pipe(dest('dist/js'))
}

exports.ugjs = minijs;


// 整合所有檔案
const concat = require('gulp-concat');

// 整合所有css
function concatall_css() {
   return src('src/*.css')
      .pipe(concat('all.css')) // 整合成一隻css
      .pipe(cleanCSS()) // minify css
      .pipe(dest('dist/css'));
}

exports.allcss = concatall_css;

// 整合所有js
function concatall_js() {
   return src('src/*.js')
      .pipe(concat('all.js')) // 整合成一隻js
      .pipe(uglify()) // minify js
      .pipe(dest('dist/js'));
}

exports.alljs = concatall_js;


// sass 編譯
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function sassstyle() {
   return src('./src/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      // .pipe(sass.sync({
      //    outputStyle: 'compressed'  //gulp sass 內建壓縮
      // }).on('error', sass.logError))
      //.pipe(cleanCSS()) // minify css
      .pipe(sourcemaps.write())
      .pipe(dest('./dist/css'));
}

exports.s = sassstyle;

// 合併html
const fileinclude = require('gulp-file-include');

function includeHTML() {
   return src(['./src/html/*.html' , './src/html/**/*.html'])
       .pipe(fileinclude({
           prefix: '@@',
           basepath: '@file'
       }))
       .pipe(dest('./dist/html'));
}

exports.html = includeHTML;


function watchall(){
   watch(['src/html/*.html' , 'src/html/**/*.html' , 'src/layout/*.html' ,] , includeHTML);
   watch(['src/sass/*.scss' , 'src/sass/**/*.scss' , 'src/sass/**/**/*.scss'] , sassstyle);
   
}

exports.w = watchall


const browserSync = require('browser-sync');
const reload = browserSync.reload;

function browser(done) {
   // browserSync.init({
   //     server: {
   //         baseDir: "./dist/html/frontend",
   //         index: "index.html"
   //     },
   //     port: 5500
   //    // http://127.0.0.1:5500/
   //    //  port: 3000
   // });
   watch(['src/html/*.html' , 'src/html/**/*.html' , 'src/layout/*.html' ,] , includeHTML).on('change' , reload);
   watch(['src/sass/*.scss' , 'src/sass/**/*.scss' , 'src/sass/**/**/*.scss'] , sassstyle).on('change' , reload);
   watch(['src/js/*.js' , 'src/js/**/*.js'] , minijs).on('change' , reload);
   watch(['src/img/*.*' ,  'src/img/**/*.*'] , package).on('change' , reload);
   done();
}

exports.default = series(parallel(includeHTML ,sassstyle, minijs ,package),browser)