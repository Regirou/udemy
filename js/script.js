'use strict';

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are you already 18?', '18');
// console.log(answer+5);

// const answers = [];

// answers[0] = prompt("What's your first name?", '');
// answers[1] = prompt("What's your last name?", '');
// answers[2] = prompt("What age are you?", '');


// document.write(answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Regina';
// alert(`Hi, ${user}`);


// console.log('arr' + "-object");
// console.log(4 + "5");

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(11%4);

// console.log(2*4 == 8);
// console.log(2*4 === '8');

// const isChecked = false,
//       isClosed = false;
    
// console.log(isChecked || !isClosed);     


  
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt ('How many movies have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('What was your last movie seen?', ''),
      b = prompt ('what rate whould you give it?', ''),
      c = prompt ('What was your last movie seen?', ''),
      d = prompt ('what rate whould you give it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
