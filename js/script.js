'use strict';
// lesson 1

// const start = document.querySelector('#start'),
//      progress = document.querySelectorAll(('.previews')),
//      previews = document.querySelectorAll('.previews'); 

    
// start.addEventListener('click', work);

// function work() {
//     let counter = 0;

//     const id = setInterval(() => {
//         progress.value += 100/previews.length;
//         previews[counter].classList.toggle('ready');
//         counter++;

//     if(counter === previews.length) {
//         clearInterval(id);
//     }
//     }, 500);
// }


//  lesson 4

// console.log(1);


// lesson 5


// let number = 5;
// let NUmber = 5;
// const leftBorderWidth = 1;

// console.log(number);
// // let number = 50;

// number = 10;

// console.log(number);
// // leftBorderWidth = 10;

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// var name = 'Ivan'; // -- устаревший формат, уже не используется

// name = 'Alex';
// console.log(name);

// {
//     let result = 50;


//     // console.log(result);
// }
// console.log(result);

// a = 15;

// console.log(a);


// alert(5);
// [].push('a');


// lesson 6



// let number = 4.6;

// console.log(-4/0);

// console.log('string' * 9);


// const persone = `5`;

// const bool = false;
// console.log(something); 

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);

// console.log(obj["name"]);
//                 0           1              2       3
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, 'apple.bmp', {}, []];

// console.log(arr[1]);











// lesson 7


// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "18");
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('Как ваше имя?', "");
// answers[1] = prompt('Как ваше фамилия?', "");
// answers[2] = prompt('Как ваше лет?', "");


// console.log(typeof(answers));
// console.log(typeof(null));








// lesson 8


// const caregory = 'toys';
// console.log('https://someurl.com/${category}/5');

// const user = 'im';

// alert(`Hello, ${user}`);



// lesson 9

// console.log('arr' + " - object");
// console.log(4 +"5");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);


// console.log(2*4 === '8');

// const isChecked = true,
//       isClose = false;

//       console.log(isChecked && isClose);

// console.log(2 + 2 * 2 !== '6');



// && -- и 
// || -- или




// lesson 10

// a = 5;

// console.log(a);

// let wreo;

// console.log(wreo);




// let hotr = 15;

// console.log(hort);


// lesson 11


const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его',''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его','');

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его','');

//     if (a != null && b != null && a != '' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// do{
//     console.log(a);
//     personalMovieDB.count < 10;
// }
// while (n <= 55);





// let i = 0; i++;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
// } while (i < 2);

//     do (a != null && b != null && a != '' && b !='' && a.length < 50); {
//     }  
//     while {
//         console.log(personalMovieDB.movies[a] = b);
//         }


// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его','');


//     if (a != null && b != null && a != '' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }



if(personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
}   else if (personalMovieDB.count >=  10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
}   else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}   else {
    console.log('Произошла ошибка');
} 

console.log(personalMovieDB);
// if (1) {
//     console.log('Ok!');
// }  else {
//     console.log('Error');
// }
// const num = 50;
// if(num < 49) {
//     console.log('Error');
// }   else if (num > 100){
//     console.log('Много');
// } else {
//     console.log('Ok');
// }
// (num == 50) ? console.log("Ok") : console.log('Error');
// // lesson 12

// if (1) {
//     console.log('Ok!');
// }   else {
//     console.log('Error');
// }

// if(number < 49) {
//     console.log('Error');
// } else if (number > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (number === 50) ? console.log('Ok!') : console.log('Error');

// const number = 50;

// switch(number) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// lesson 13 ЦИКЛЫ



// while (n <= 55) {
//     console.log(n); ----------- цикл while 
//     n++;
// }

// do{
//     console.log(n);
//     n++;
// }
// while (n <= 55);

// let n = 50;

// for (let i = 1; i < 10; i++) {
//     if(i === 6) {
//         break;
//         continue;
//     }
//     console.log(i);
// }



// let s = 50;

// while(s <= 55) {
//     console.log(s);
//     s++;
// }

// do {
//     console.log(s);
//     s++;
// }
// while(s < 55);

// for(let i = 1; i < 8; i++) {
//     if(i == 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
//     s++;
// }





// lesson 14






// lesson 15


// lesson 16


// lesson 17


// lesson 18

// lesson 19

// lesson 20


// lesson 21

// lesson 22

// lesson 23

// lesson 24

// lesson 25

// lesson 26

// lesson 27

// lesson 28

// lesson 29

// lesson 30

// lesson 31

// lesson 32
