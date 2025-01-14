let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

// Очистка папки docs
gulp.task('clean', async function(){
    await del('docs');
});

// Компиляция Sass в CSS
gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 8 versions']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

// Обработка стилей (нормализация и сторонние библиотеки)
gulp.task('css', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css'
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('libs.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

// Обновление HTML файлов
gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}));
});

// Обновление JS файлов
gulp.task('script', function(){
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}));
});

// Настройка BrowserSync для живой перезагрузки
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// Экспорт всех файлов в папку docs
gulp.task('export', function(){
    return Promise.all([
        gulp.src('app/**/*.html')
            .pipe(gulp.dest('docs')),

        gulp.src('app/css/**/*.css')
            .pipe(gulp.dest('docs/css')),

        gulp.src('app/js/**/*.js')
            .pipe(gulp.dest('docs/js')),

        gulp.src('app/fonts/**/*.*')
            .pipe(gulp.dest('docs/fonts')),

        gulp.src('app/img/**/*.*')
            .pipe(gulp.dest('docs/img'))
    ]);
});

// Следим за изменениями файлов
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'));
});

// Задача для билда (с очисткой и экспортом)
gulp.task('build', gulp.series('clean', 'export'));

// Основная задача для запуска
gulp.task('default', gulp.parallel('css', 'sass', 'browser-sync', 'watch'));
