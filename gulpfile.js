// 'use strict';

//plug-ins
var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpsass = require('gulp-sass');
var	browserSync = require('browser-sync');
var	plumber = require('gulp-plumber');
var	autoprefixer = require('gulp-autoprefixer');
var	minifyCSS = require('gulp-minify-css');
var	rename = require('gulp-rename');
var notify = require('gulp-notify');
var historyApiFallback = require('connect-history-api-fallback');

    gulp.task('compile-react', function() {
	return gulp.src('./src/main.jsx')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(webpack({
		output: {
			filename: 'main.js'
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		}
	}))
	.pipe(gulp.dest('./build/js'));
});

    gulp.task('gulpsass', function() {
       gulp.src('./src/scss/*.scss')
          .pipe(gulpsass())
          .pipe(autoprefixer({
             browsers: ['last 2 versions']
          }))
          .pipe(gulp.dest('./build/css'))
          .pipe(minifyCSS())
          .pipe(rename({extname: '.min.css'}))
          .pipe(gulp.dest('./build/css'));
    });

    gulp.task('copy-html', function() {
        gulp.src('./src/index.html')
            .pipe(gulp.dest('./build'));
    });

    gulp.task('browser-sync', ['compile-react','copy-html'],  function() {

    	browserSync.init({
    		server: {
            baseDir: './build/',
            middleware: [historyApiFallback()]
        }
    });
        gulp.watch(['./src/index.html'], ['copy-html']);
        gulp.watch(['./src/components/*.jsx'], ['compile-react']);
    	gulp.watch(['./src/main.jsx'], ['compile-react']);
        gulp.watch(['./src/scss/*.scss'], ['gulpsass']);
        gulp.watch(['./build/js/main.js', './build/index.html', './build/css/style.min.css']).on('change', browserSync.reload);
    });

    gulp.task('default', ['browser-sync', 'gulpsass']);
