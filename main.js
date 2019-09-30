


const name = 'Ilya', soname = 'Wise', age = '19 year';
let constPe = 123;
var mother = 'Svetlana';

console.log(constPe);

console.log(name,soname,age);



var admin, name = 'Василий';

admin = name;

console.log(admin);


let notTrue = false;

var user = {
    name : 'Dasha'
};

typeof user;

console.log(typeof notTrue);

typeof - возращает тип аргумента


var access = access.toString(11);

console.log(access);


const ageIlya = 19;

var result = prompt('Сколько лет Илье');



    if (result === ageIlya) {  // нужно использовать точное сравнения для более строгой типизации/сравнения
        alert('Правильно!');
    } else if (result !== ageIlya) {  // тоже самое
        alert('А вот и нет');
    }   else {
        alert('Что-то пошло не так');
    }




const nameCompany = prompt('Кто создал JavaScript?');

    if (nameCompany === 'EcmaScript') {  // строгая типизация
        alert('Все верно!');
    } else {
        alert('Увы, нет');
    }



let i = 0;

    while (i < 20) {
        console.log(i);
        i++
    }




var b = 10;

    while (b) {
        console.log(b);
        b--;
    }





var i;

    for (i = 0; i < 3; i++) {
        console.log(i);
    }


var b = 0;

    while (b < 3) {
        console.log('namber ' + b +'!');
        b++;
    }




let result;

    do {
        result = prompt('Введите число больше 100');
    } while (result <= 100 && result != null) {

    }




var a = 2 + 2;

    switch (a) {
        case 3:
            alert('Maло');
            break;
        case 4:
            alert('В точку');
            break;
        case 5:
            alert('Перебор');

            break;
        default:
            alert('Я таких значений не знаю');
    }





const arg = prompt('Введите arg')

    switch (arg) {
        case '0':
        case '1':
            alert('Один и ноль');
            break;

        case '2':
            alert('Два');
            break;

        case '3':
            alert('Три');
            break;

        default:
            alert('Неизвестное значение: ' + arg);
    }



<<<<<<< HEAD

    function showMessage() {
        alert('Hello mr.Fridman');
    }

    showMessage();

=======
    
    function showMessage() {
        alert('Hello mr.Fridman');
    }
    
    showMessage();
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc


    var test = calcD(-4,2,1);
    console.log(test);
<<<<<<< HEAD

    function calcD(a,b,c) {
        return b * b - 4 * a * c;
    }



    var userName = prompt('Введите имя', 'Василий');
    var isTeaWanted = confirm('Вы хотите чаю?');

    alert('Посетитель: ' + userName);
    alert('Чай: ' + isTeaWanted);




    var num = 'Hello World';

    console.log(num.length);

    console.log(num.toUpperCase());




    var n = 12.345;

=======
    
    function calcD(a,b,c) {
        return b * b - 4 * a * c;
    }
    

    
    var userName = prompt('Введите имя', 'Василий');
    var isTeaWanted = confirm('Вы хотите чаю?');
    
    alert('Посетитель: ' + userName);
    alert('Чай: ' + isTeaWanted);
    
    


    var num = 'Hello World';
    
    console.log(num.length);
    
    console.log(num.toUpperCase());
    


    
    var n = 12.345;
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    alert( n.toFixed(2) ); //"12.35"
    alert( n.toFixed(0) ); //"12"                        //Error
    alert( n.toFixed(5) ); //"12.34500"



    alert(1 / 0); // Бесконечность /Infinity



    alert(parseInt('12px'));
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    alert(parseFloat('12.2.3'));



    var n = 255;
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    alert(n.toString(16)); // переводит число в 16 ричную систему


    alert(Math.floor(3.1)); // округляет вниз
    alert(Math.ceil(3.1)); // округляет вверх
    alert(Math.round(3.4)); // округляет до ближайшего целого числа

<<<<<<< HEAD

    var number = 123456789;

    alert(number.toLocaleString() ); // выводит числа красиво



=======
    
    var number = 123456789;
    
    alert(number.toLocaleString() ); // выводит числа красиво


    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    var person = {
        soName: 'Мудрый',
        motherName: 'Светлана'
    };
<<<<<<< HEAD

    person.name = 'Илья';       // создание
    person.age = '19';

    console.log('Имя: ' + person.name, 'и возраст: ' + person.age);

    delete person.age;                                                  // удаление

    if ('name' in person) {
        console.log('Свойство name существует');     //проверка на наличие
    }


    console.log('Имя мамы: ' + person.motherName + ' Фамилия Ильи: ' + person.soName);
=======
    
    person.name = 'Илья';       // создание
    person.age = '19';
    
    console.log('Имя: ' + person.name, 'и возраст: ' + person.age);
    
    delete person.age;                                                  // удаление
    
    if ('name' in person) {
        console.log('Свойство name существует');     //проверка на наличие
    }
    
    
    console.log('Имя мамы: ' + person.motherName + ' Фамилия Ильи: ' + person.soName);
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc




<<<<<<< HEAD


=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    var user = {
        name: 'Таня',
        age: 25,
        size: {
            top: 90,
            middle: 120,
            bottom: 90
        }
    };
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    alert(user.name);
    alert(user.size.top);




<<<<<<< HEAD

    var user = {};

    user.name = 'Vasa';
    user.surname = 'Petrov';

    user.name = 'Sergey';


    delete user.name;

=======
    
    var user = {};
    
    user.name = 'Vasa';
    user.surname = 'Petrov';
    
    user.name = 'Sergey';
    
    
    delete user.name;
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    console.log(user.surname);



<<<<<<< HEAD


=======
    
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    var menu = {
        width: 300,
        height: 200,
        title: 'Menu',
        maxWidth: 209,
        maxHeight: 110
    };
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    for (var key in menu) {
        console.log('Ключ: ' + key + ' Значение: ' + menu[key] );        //Сортировка
    }




<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    var user = {
        name: 'Vasa',
        age: 30
    };
<<<<<<< HEAD

    var clone = {};


    for (var key in user) {
        clone[key] = user[key];
    }





    var arr = [];


    var fruits = ['Apple', 'Orange', 'Plum'];

    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);


    fruits[2] = 'Pompkins'; // можно заменить

    fruits[4] = 'NewApple'; // и так добавить

    console.log(fruits.length);
    console.log(fruits);



                                                //Сортировка масива


    console.log(fruits.pop()); // удаляет последний элемент масива

    console.log(fruits.push('NewItem') ); // добавляет новый элемент масива в конец

    console.log(fruits.shift()); // удаляе из масива первый элемент и возращает его

    console.log(fruits.unshift('TwoItems') ); // добавляет элемент в начало масива

    for (var i = 0; i < fruits.length; i++) {           // перебор масива при поомщи цикла
        console.log(fruits[i]);
    }


=======
    
    var clone = {};
    
    
    for (var key in user) {
        clone[key] = user[key];
    }
    


    
    
    var arr = [];
    
    
    var fruits = ['Apple', 'Orange', 'Plum'];
    
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);
    
    
    fruits[2] = 'Pompkins'; // можно заменить
    
    fruits[4] = 'NewApple'; // и так добавить
    
    console.log(fruits.length);
    console.log(fruits);
    
    
    
                                                //Сортировка масива
    
    
    console.log(fruits.pop()); // удаляет последний элемент масива
    
    console.log(fruits.push('NewItem') ); // добавляет новый элемент масива в конец
    
    console.log(fruits.shift()); // удаляе из масива первый элемент и возращает его
    
    console.log(fruits.unshift('TwoItems') ); // добавляет элемент в начало масива
    
    for (var i = 0; i < fruits.length; i++) {           // перебор масива при поомщи цикла
        console.log(fruits[i]);
    }
    
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    var matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ];

    reverse - меняет порядок элементов

    contact - добавляет новые элементы к уже существующего масива

    forEach -  используется для перебора масива

    filter - используется для фильтрации масива через функцию

    map - используеться для трансформации масива

    reduce/reduceRight— для прохода по массиву с вычислением значения


<<<<<<< HEAD

    var time = new Date();  // Объект с времинем и точной датой

=======
    
    var time = new Date();  // Объект с времинем и точной датой
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    console.log(time);


    var user = {
        name: 'ilya',
        soname: 'Wise'
    };
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
       console.log(this.user) ;



    var user = {
        name: 'Василий',
<<<<<<< HEAD

=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
        sayHi: function () {
            console.log(this.name);  // Указатель this
        }
    };
<<<<<<< HEAD

    user.sayHi();

=======
    
    user.sayHi();
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    user.sayHi();


    console.log(new Date);


    function f(x) {
<<<<<<< HEAD

    };

    var timers = {};

    f = timingDecorator(f,'myfunc');

    f(1);
    f(2);
    f(3);

    console.log(timers.myFunc);
=======
    
    };
    
    var timers = {};
    
    f = timingDecorator(f,'myfunc');
    
    f(1);
    f(2);
    f(3);
    
    console.log(timers.myFunc);
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc




<<<<<<< HEAD


=======
    
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
    function func() {
        while (i = 0; i < 100) {
            console.log(i);
        }
    }
    setTimeout(func, 5000);


                               КофеВарка на ООП



<<<<<<< HEAD

    function CoffeeMachine(power) {
        this.waterAmount = 0;

=======
   
    function CoffeeMachine(power) {
        this.waterAmount = 0;
   
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
        // расчет времени для кипячения
        function getBoilTime() {
            return 1000; // точная формула расчета будет позже
        }
<<<<<<< HEAD

=======
   
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
        //что делать по окончании процесса
        function onReady() {
            console.log('Кофе готово!');
        }
<<<<<<< HEAD

=======
   
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
        this.run = function() {
            //setTimeout - встроенная функция
            // она запустит onReady через getBoilTime
            setTimeout(onReady, getBoilTime());
        };
    }
    var coffeeMachine = new CoffeeMachine(100);
    coffeeMachine.waterAmount = 200;
<<<<<<< HEAD

   coffeeMachine.run();



   let oValue = 0o10;
   console.log(oValue);


    let twoValue = 0020;                         // восьмиричная и двоичная система исчисления
    console.log(twoValue);

    let person = 'Wise';
    console.log(`Привет ${person}`)     // строковые шаблоны и разделители

=======
   
   coffeeMachine.run();
   
   
   
   let oValue = 0o10;
   console.log(oValue);
   
   
    let twoValue = 0020;                         // восьмиричная и двоичная система исчисления
    console.log(twoValue);
   
    let person = 'Wise';
    console.log(`Привет ${person}`)     // строковые шаблоны и разделители
   
   
>>>>>>> be43a0ac3c2b331e3f4093553d55c58478743acc
