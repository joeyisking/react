var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify({ extensions: ['.js'], debug: true})
   //     .require('./js/app.js', { entry: true })
        .transform(babelify, {presets: ["stage-0", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js', ['browserify']);
});
