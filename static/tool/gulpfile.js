var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var pngquant = require('imagemin-pngquant');
var imageminJpegoptim = require('imagemin-jpegoptim');



gulp.task('image',function(){
    gulp.src('../images/**')
        .pipe(pngquant({floyd: 0.3})())
        .pipe(imageminJpegoptim({progressive: true})())
        .pipe( gulp.dest('../src/images/') );
});

//scss解析
gulp.task('scss', function () {
    gulp.src('../scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../css'));
});


gulp.task('css', function() {
    return gulp.src('../css/*.css')      //压缩的文件
        .pipe(minifycss({
            advanced:false,
            //compatibility:'ie7',
            keepBreaks:false
        }))
        .pipe(gulp.dest('../release/css/'));   //输出文件夹

});

gulp.task('auto',function(){
    gulp.watch('../scss/*.scss',['scss']);
    //gulp.watch('../css/*.css',['css']);
});
