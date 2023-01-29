/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//////////////* FOR LOOP STYLE  *///////////////////

function rememberMyFilms() {
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
}

rememberMyFilms();


/////////////////* WHILE LOOP STYLE AND DO/WHILE LOOP STYLE *//////////////////


// let i = 0;
// while (i < numberOfFilms) {
//     let lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
//     if (lastSeenMovie === null || lastSeenMovie.length === 0 || lastSeenMovie.length > 50) {
//         i = -1;
//         continue;
//     }
//     let rateTheMovie = prompt('На сколько оцените его?', '');
//     if (rateTheMovie === null || rateTheMovie.length === 0 || rateTheMovie.length > 50) {
//         i = -1;
//         continue;
//     }
//     i++;
//     personalMovieDB.movies[lastSeenMovie] = rateTheMovie;
// }

////////////////* DO WHILE LOOP STYLE*//////////////////


// let i = 0;
// do {
//     let lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
//     if (lastSeenMovie === null || lastSeenMovie.length === 0 || lastSeenMovie.length > 50) {
//         i = -1;
//         continue;
//     }
//     let rateTheMovie = prompt('На сколько оцените его?', '');
//     if (rateTheMovie === null || rateTheMovie.length === 0 || rateTheMovie.length > 50) {
//         i = -1;
//         continue;
//     }
//     i++;
//     personalMovieDB.movies[lastSeenMovie] = rateTheMovie;
// } while (i < numberOfFilms);

//////////////* IF/ELSE FUNCTION FOR AN ANSWER*////////////////

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

writeYourGenres ();

showMyDB(personalMovieDB.privat);

