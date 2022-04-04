const gulp = require('gulp');

//todo 新写法 和教程中不一样 require('gulp-sass')
const sass =  require('gulp-sass')(require('sass'));// sass -> css

const minifyCSS = require('gulp-minify-css')

gulp.task('sass', async function (){
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

