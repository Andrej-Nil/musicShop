var gulp = require('gulp');
var sass = require('gulp-sass'); //Подключаем Sass пакет
var browserSync = require('browser-sync'); // Подключаем Browser Sync
var cssnano = require('gulp-cssnano'); // Подключаем пакет для минификации CSS
var rename = require('gulp-rename'); // Подключаем библиотеку для переименования файлов
var autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
var fileinclude = require('gulp-file-include');// Подключаем gulp-file-include

// Слежение за js файлами
gulp.task('scripts', function () {
    return gulp.src(['app/js/**/*.js', 'app/libs/**/*.js'])
        .pipe(browserSync.reload({stream: true}))
});

// Слежение за html файлами
gulp.task('code', function () {
    return gulp.src('app/html/**/*.html')
        .pipe(browserSync.reload({stream: true}))
});

// Модульная верстка html
gulp.task('html', function () { // Создаем таск html
    return gulp.src('app/html/**/index.html') // Берем источник
        .pipe(fileinclude({
            prefix: "@@" // указываем прифекс
        })) //
        .pipe(gulp.dest('app/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});

// сжимаем css
gulp.task('css-min', function () {
    return gulp.src('app/sass/**/*.scss') // Выбираем файл для минификации
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

// Компилясия scss => css
gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

// обновление страницы
gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({	// Выполняем browser Sync
        server: {  // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // // Отключаем уведомления
    });
});

// очистки кеша Gulp
gulp.task('clear', function (callback) {
    return cache.clearAll();
})

// Слежение за scss файлами
gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/**/*.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
    gulp.watch(['app/html/**/*.html'], gulp.parallel('html')); // Наблюдение за HTML 
});

gulp.task('default', gulp.parallel('html', 'css-min', 'sass', 'scripts', 'browser-sync', 'watch'));
