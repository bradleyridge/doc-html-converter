var gulp = require('gulp');
var convert = require('./convert.js');
var clean = require('gulp-clean');
var htmlBeautify = require('gulp-html-beautify');





gulp.task('convert-all', function(){    
    gulp.src('input_files/*')
        .pipe(convert())
        .pipe(gulp.dest('output_files/normal/'))
        .pipe(htmlBeautify({indentSize: 2}))
        .pipe(gulp.dest('output_files/pretty/'));
});
gulp.task('clean', function(){
    gulp.src(['output_files'], {read: false})
        .pipe(clean());
});
