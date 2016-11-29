var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Starts a local server in the base directory
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watches for changes in html and js files in base directory, and reloads if they occur (when saved)
    // Note, all html files tracked, but only scripts.js is reloaded - doesn't refresh on gulpfile change
    gulp.watch(['*.html', 'script.js'], reload);

    // Watches for changes in css files, grabs the files, pipes them to browsersync stream
    // This injects the css into the page without a reload
    gulp.watch('*.css', function() {
        gulp.src('*.css')
            .pipe(browserSync.stream());
    });
});

// Runs when "$ gulp" is typed
// Automatically runs the serve task

gulp.task('default', ['serve']);