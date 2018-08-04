var gulp = require('gulp');
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('HEY - you created a gulp task')
});

gulp.task('html', function() {
  console.log('Imagine something useful being done in your html')
});

gulp.task('css', function() {
  //the content from the src will me moved to pipe for manipulation
  gulp.src('src/components/styleComponents/App.css').pipe()
});

gulp.task('watch', function(){
 //set the watch function and set the files you wanna watch
 // In this case
  watch('public/index.html', function(){
    gulp.start('html');
  })

  watch('src/components/styleComponents/*.css', function(){
    gulp.start('css');
  })
})

