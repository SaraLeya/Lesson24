/*Урок 2.4 */
/*Задание 1*/
/*
let hi = console.log ('Hello');
let hie = console.log ('Hello');
*/ 
/*Задание 1 (второй вариант) */
/* 
let hello = 1;
do {
    console.log ('Hello');
    hello++;
} while (hello <=2);
*/
/*Задание 2*/
/*
let a = 0;
do {
    console.log (a);
    a++;
} while (a <=5);
*/
/*Задание 3*/
/*
let b = 7;
do {
    console.log (b);
    b++;
} while (b <=22);
*/
/*Задание 4*/
/* const money = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
}
for (let key in money){
        console.log('${key} зарплата ${money[key]}');
    } 
    */
/*Задание не работает. Делала по образцу из текста под видео. Так образец мне выдает то же, что и моя конструкция:*/
/*
const country = {
	'Лима': 'Перу',
	'Джакарта': 'Индонезия',
	'Анкара': 'Турция',
	'Париж': 'Франция',
	'Канберра': 'Австралия'
};
for (let capital in country) {
        console.log('${capital}, является столицей ${country[capital]}');
    }
*/
/*Конструкция из видео тоже не работает:*/
/* const namemoney = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
}
for (let item in namemoney) = {
    console.log(namemoney.item);
}
*/
/*Задание 5*/
/*for (let n = 1000; n>50; n/=2) {
    console.log(n);
}
let num = 5;
console.log(num);
*/
/*Задание 6 а тут переменную не выводит!!!!*/
for (let day = 6; day<=31; day+=7) {
alert('Сегодня пятница, ${day} -е число. Необходимо подготовить отчет.');
}