// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para compilar o SASS e adicionar os prefixos
function compilaSass(){
    return gulp
    .src('src/assets/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.stream());
}

// Tarefa de GULP para função de SASS
gulp.task('sass',function(done){
    compilaSass();
    done();
});

// Função para juntar o JS
function gulpJS(){
    return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
}

gulp.task('mainjs', gulpJS);

// JS Plugins
function pluginJS(){
    return gulp
    .src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/moment/min/moment.min.js',
        'js/plugins/*.js'
    ])
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/assets/js/'))
    .pipe(browserSync.stream())
}

gulp.task('pluginjs', pluginJS)

// Função para iniciar o browser
function browser(){
    browserSync.init({
        server:{
            baseDir: "./src/"
        }
    })
}

// Tarefa para iniciar o browser-sync 
gulp.task('browser-sync', browser);

// Função do watch do Gulp
function watch(){
    gulp.watch('src/assets/scss/*.scss', compilaSass);
    gulp.watch('src/assets/js/*.js', gulpJS);
    gulp.watch('src/assets/js/plugins/*.js', pluginJS);
    gulp.watch(['src/*.html'],).on('change', browserSync.reload);
}

// Inicia a tarefa de Watch
gulp.task('watch', watch)

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginjs'));