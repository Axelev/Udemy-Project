/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будетпроверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' ||
               personalMovieDB.count == null ||
               isNaN(personalMovieDB.count)) {

            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            if (lastSeenMovie === null || lastSeenMovie.length === 0 || lastSeenMovie.length > 50) {
                i--;
                continue;
            }
            let rateTheMovie = prompt('На сколько оцените его?', '').trim();
            if (rateTheMovie === null || rateTheMovie.length === 0 || rateTheMovie.length > 50) {
                i--;
                continue;
            }
            personalMovieDB.movies[lastSeenMovie] = rateTheMovie;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }  
    },
    showMyDB: function() {
        if (personalMovieDB.privat) {
            console.log (personalMovieDB);
        } 
    },
    writeYourGenres: function() {

        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    }
};

const {start, rememberMyFilms, detectPersonalLevel, showMyDB, writeYourGenres, toggleVisibleMyDB} = personalMovieDB;

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
// toggleVisibleMyDB();
showMyDB();