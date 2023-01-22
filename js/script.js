/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" 

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//////////////* FOR LOOP STYLE  *///////////////////

for (let i = 0; i < 2; i++) {
    let lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
    if (lastSeenMovie === null || lastSeenMovie.length === 0 || lastSeenMovie.length > 50) {
        i--;
        continue;
    }
    let rateTheMovie = prompt('На сколько оцените его?', '');
    if (rateTheMovie === null || rateTheMovie.length === 0 || rateTheMovie.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[lastSeenMovie] = rateTheMovie;
}


/////////////////* WHILE LOOP STYLE *//////////////////


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

if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log (personalMovieDB);


