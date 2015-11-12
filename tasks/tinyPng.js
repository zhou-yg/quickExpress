/**
 * Created by zyg on 15/11/10.
 */
var tinyPng = require('gulp-tinypng');
var path = require('path');
var apiKey = '_U9AFU6XG2QpeMT3__2pWl5pOW10NvfL';
var pngDir = path.resolve(__dirname,'../public/assets/background/end_mask.png');
var dest = path.resolve(__dirname,'../public/compress/');

module.exports = function(gulp){

  gulp.task('tinyPng',function(){
    gulp.src(pngDir)
      .pipe(tinyPng(apiKey))
      .pipe(gulp.dest(dest));
  });
};