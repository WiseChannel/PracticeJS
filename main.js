


// const name = 'Ilya', soname = 'Wise', age = '19 year';
// let constPe = 123;
// var mother = 'Svetlana';
//
// console.log(constPe);
//
// console.log(name,soname,age);

//
//
// var admin, name = 'Василий';
//
// admin = name;
//
// console.log(admin);
//
//
// let notTrue = false;
//
// var user = {
//     name : 'Dasha'
// };
//
// typeof user;
//
// console.log(typeof notTrue);

// typeof - возращает тип аргумента


// var access = access.toString(11);
//
// console.log(access);


// const ageIlya = 19;
//
// var result = prompt('Сколько лет Илье');
//
//
//
//     if (result == ageIlya) {
//         alert('Правильно!');
//     } else if (result != ageIlya) {
//         alert('А вот и нет');
//     }   else {
//         alert('Что-то пошло не так');
//     }



//
// const nameCompany = prompt('Кто создал JavaScript?');
//
//     if (nameCompany == 'EcmaScript') {
//         alert('Все верно!');
//     } else {
//         alert('Увы, нет');
//     }
//

//
// let i = 0;
//
//     while (i < 20) {
//         console.log(i);
//         i++
//     }
//
//
//
//
// var b = 10;
//
//     while (b) {
//         console.log(b);
//         b--;
//     }
//



//
// var i;
//
//     for (i = 0; i < 3; i++) {
//         console.log(i);
//     }
//

// var b = 0;
//
//     while (b < 3) {
//         console.log('namber ' + b +'!');
//         b++;
//     }
//


//
// let result;
//
//     do {
//         result = prompt('Введите число больше 100');
//     } while (result <= 100 && result != null) {
//
//     }



//
// var a = 2 + 2;
//
//     switch (a) {
//         case 3:
//             alert('Maло');
//             break;
//         case 4:
//             alert('В точку');
//             break;
//         case 5:
//             alert('Перебор');
//             break;
//         default:
//             alert('Я таких значений не знаю');
//     }
//



//
// const arg = prompt('Введите arg')
//
//     switch (arg) {
//         case '0':
//         case '1':
//             alert('Один и ноль');
//             break;
//
//         case '2':
//             alert('Два');
//             break;
//
//         case '3':
//             alert('Три');
//             break;
//
//         default:
//             alert('Неизвестное значение: ' + arg);
//     }



    //
    // function showMessage() {
    //     alert('Hello mr.Fridman');
    // }
    //
    // showMessage();
    //


    // var test = calcD(-4,2,1);
    // console.log(test);
    //
    // function calcD(a,b,c) {
    //     return b * b - 4 * a * c;
    // }
    //

    //
    // var userName = prompt('Введите имя', 'Василий');
    // var isTeaWanted = confirm('Вы хотите чаю?');
    //
    // alert('Посетитель: ' + userName);
    // alert('Чай: ' + isTeaWanted);
    //
    //


    // var num = 'Hello World';
    //
    // console.log(num.length);
    //
    // console.log(num.toUpperCase());
    //


    //
    // var n = 12.345;
    //
    // alert( n.toFixed(2) ); //"12.35"
    // alert( n.toFixed(0) ); //"12"                        //Error
    // alert( n.toFixed(5) ); //"12.34500"



    //alert(1 / 0); // Бесконечность /Infinity



    // alert(parseInt('12px'));
    //
    // alert(parseFloat('12.2.3'));



    // var n = 255;
    //
    // alert(n.toString(16)); // переводит число в 16 ричную систему


    // alert(Math.floor(3.1)); // округляет вниз
    // alert(Math.ceil(3.1)); // округляет вверх
    // alert(Math.round(3.4)); // округляет до ближайшего целого числа

    //
    // var number = 123456789;
    //
    // alert(number.toLocaleString() ); // выводит числа красиво


    //
    // var person = {
    //     soName: 'Мудрый',
    //     motherName: 'Светлана'
    // };
    //
    // person.name = 'Илья';       // создание
    // person.age = '19';
    //
    // console.log('Имя: ' + person.name, 'и возраст: ' + person.age);
    //
    // delete person.age;                                                  // удаление
    //
    // if ('name' in person) {
    //     console.log('Свойство name существует');     //проверка на наличие
    // }
    //
    //
    // console.log('Имя мамы: ' + person.motherName + ' Фамилия Ильи: ' + person.soName);
    //




    //
    // var user = {
    //     name: 'Таня',
    //     age: 25,
    //     size: {
    //         top: 90,
    //         middle: 120,
    //         bottom: 90
    //     }
    // };
    //
    // alert(user.name);
    // alert(user.size.top);




    //
    // var user = {};
    //
    // user.name = 'Vasa';
    // user.surname = 'Petrov';
    //
    // user.name = 'Sergey';
    //
    //
    // delete user.name;
    //
    // console.log(user.surname);



    //
    //
    // var menu = {
    //     width: 300,
    //     height: 200,
    //     title: 'Menu',
    //     maxWidth: 209,
    //     maxHeight: 110
    // };
    //
    // for (var key in menu) {
    //     console.log('Ключ: ' + key + ' Значение: ' + menu[key] );        //Сортировка
    // }




    //
    // var user = {
    //     name: 'Vasa',
    //     age: 30
    // };
    //
    // var clone = {};
    //
    //
    // for (var key in user) {
    //     clone[key] = user[key];
    // }
    //


    //
    //
    // var arr = [];
    //
    //
    // var fruits = ['Apple', 'Orange', 'Plum'];
    //
    // console.log(fruits[0]);
    // console.log(fruits[1]);
    // console.log(fruits[2]);
    //
    //
    // fruits[2] = 'Pompkins'; // можно заменить
    //
    // fruits[4] = 'NewApple'; // и так добавить
    //
    // console.log(fruits.length);
    // console.log(fruits);
    //
    //
    //
    //                                             //Сортировка масива
    //
    //
    // console.log(fruits.pop()); // удаляет последний элемент масива
    //
    // console.log(fruits.push('NewItem') ); // добавляет новый элемент масива в конец
    //
    // console.log(fruits.shift()); // удаляе из масива первый элемент и возращает его
    //
    // console.log(fruits.unshift('TwoItems') ); // добавляет элемент в начало масива
    //
    // for (var i = 0; i < fruits.length; i++) {           // перебор масива при поомщи цикла
    //     console.log(fruits[i]);
    // }
    //
    //
    // var matrix = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9],
    // ];

    // reverse - меняет порядок элементов

    // contact - добавляет новые элементы к уже существующего масива

    // forEach -  используется для перебора масива

    // filter - используется для фильтрации масива через функцию

    // map - используеться для трансформации масива

    // reduce/reduceRight— для прохода по массиву с вычислением значения



    var time = new Date();  // Объект с времинем и точной датой

    console.log(time);


