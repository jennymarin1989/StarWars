var gulp = require('gulp');
watch = require('gulp-watch');
dest = require('gulp-dest');
pipe = require('gulp-pipe');

gulp.task('default', function() {
  console.log('HEY - you created a gulp task')
});

gulp.task('html', function() {
  console.log('Imagine something useful being done in your html')
});

gulp.task('css', function() {
  //the content from the src will me moved to pipe so after adding new fetures, a new
  //folder will be created in gulp.dest(new destination)
  return gulp.src('./src/components/styleComponents/App.css')
    .pipe(gulp.dest('./src/temp/styleComponents')); // recreates app.cs with all the changes made
});

gulp.task('src', function(){
  console.log("hello dest")
})

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

