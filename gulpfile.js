var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var uglify       = require('gulp-uglify')
var plumber      = require('gulp-plumber');
var nodemon      = require('nodemon');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');

gulp.task('default', ['sass', 'browserSync'], function(){});

gulp.task('sass', function(){
  return sass('public/sass/main.sass')
            .pipe(plumber())
            .pipe(autoprefixer({
              browser: ['last 2 versions'],
              cascade: false
            }))
            .pipe(gulp.dest('public/css/'))
            .pipe(browserSync.reload({stream: true}));
})

gulp.task('browserSync', ['nodemon'], function() {

  browserSync.init(null, {
    proxy: 'http://localhost:5000',
    files: ['view/index.pug'],
    browser: 'google chrome',
    port: 7000
  });

  gulp.watch('./**/*.sass', ['sass']);
  // watch js needs to be altered to ignore node_modules as CPU usage is too high
  gulp.watch('./public/js/*.js').on('change', browserSync.reload);
  gulp.watch('./**/*.pug').on('change', browserSync.reload);
})

gulp.task('nodemon', function(cb) {
  var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {

		if (!started) {
			cb();
			started = true;
		}
	});
})
