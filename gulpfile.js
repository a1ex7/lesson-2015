var gulp        = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'lesson6/task2' // Директория для сервера
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('lesson6/task2/css/*.css', browserSync.reload); 
    gulp.watch('lesson6/task2/*.html', browserSync.reload);
});