// let nameCar = 'Ford';
// let carYear = '2008';
// let personYear = '1999';
<<<<<<< HEAD
//
=======

>>>>>>> 96bfda5e7e501525c9373db48ffae4eebe3d76e4
// function calculateCar() {
//     // let carYear = '2008';
//     // let personYear = '1999';
//     let result = carYear - personYear;
<<<<<<< HEAD
//
=======

>>>>>>> 96bfda5e7e501525c9373db48ffae4eebe3d76e4
//     if(result === 9) {
//         console.log('Result = 9');
//     } else if (result === 8) {
//         console.log('Result = 8')
//     } else {
//         console.log('Result !=')
//     }
<<<<<<< HEAD
//
//     // switch(result === 9) {
//     //     case
//     // }
//
//     return result;
// }
//
=======

//     // switch(result === 9) {
//     //     case 
//     // }

//     return result;
// }

>>>>>>> 96bfda5e7e501525c9373db48ffae4eebe3d76e4

// // console.log(calculateCar());

// // const num = [1,2,3,5,2];

// // num.push('Not a num')

// //  for(let i = 0; i < 6; i++) {
// //      console.log(num[i]);
// //  }

// // let mus = [1,2,3,4,5,6,7,8,9]

// // for(let i = 0; i < mus.length; i++) {
// //     console.log(mus[i]);
// // }

<<<<<<< HEAD
//
// let div = document.getElementById('root')
// let p = document.getElementsByClassName('root')     // старые методы обращение через DOM
// let h1 = document.getElementsByTagName('h1')
//
//
// let div = document.querySelector('#nameID')   // позволяет более удобно получить элементы из ID
// let p = document.querySelectorAll('.p') //  получаем всю колекцию с класса
// let h1 = document.querySelector('h1') // получаем доступ ко-всем тегам h1
//
//
//
=======

// // let div = document.getElementById('root')
// // let p = document.getElementsByClassName('root')     // старые методы обращение через DOM
// // let h1 = document.getElementsByTagName('h1')


// // let div = document.querySelector('#nameID')   // позволяет более удобно получить элементы из ID
// // let p = document.querySelectorAll('.p') //  получаем всю колекцию с класса
// // let h1 = document.querySelector('h1') // получаем доступ ко-всем тегам h1



>>>>>>> 96bfda5e7e501525c9373db48ffae4eebe3d76e4
// function inner() {
//     let ul = document.querySelector('#root');
//     ul.innerHTML = '<p>Hello Wise</p>';
//     return ul;
// }
//
// inner()
//
// const a = document.querySelector('a');
// const oldHref = a.getAttribute('href')
// a.setAttribute('href', 'habr.com')
//
//
// const button = document.querySelector("#button");
// const p = document.querySelector('#root')
// const buttonTwo = document.querySelector('#buttontwo');
//
//     function nameFunc() {
//         console.log('Click button');
//         p.textContent = 'JS';
//     }
//
//     function twoFunc() {
//         console.log('TwoButton');
//         p.textContent = 'NoJS';
//     }
//
// buttonTwo.addEventListener('click', twoFunc);
// button.addEventListener('click', nameFunc);
//
// const input = document.querySelector('#inputeText');
//
//     function inputeT() {
//         console.log('click');
//         p.textContent = p.value;
//     }
//
//     input.addEventListener('click', inputeT);
//
// let p = document.querySelector('#root');
// let button = document.querySelector('#inputeText');
// let input = document.querySelector('#inputID')
//
//     function nameF() {
//     console.log('click');
//     p.textContent = input.value
// }
//
//     button.addEventListener('click', nameF);
//
//     p.addEventListener('mouseenter', function () {
//     console.log('Mouse up!');
//     p.innerHTML = 'WiseINC';
//     });
//                                         // события мыши
//     p.addEventListener('mouseleave', function () {
//     console.log('Mouse up!');
//     p.innerHTML = 'NoWISE = )';
//     });
//


// let str = '1,2,3,4,5,6,7,8';

// for(let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// let array = str.split(',');

// const date = () => {
//     console.log(Math.floor(new Date().getMilliseconds()))
// };
//
// date();

// let num = [1,2,3,4,5];

// for (let i = 0; i < num.length; i++) {
//    console.log(num[i])
// }


// let car = {
//     name: 'ford',
//     year: 2015
// }
//
// console.log(car);


//
// Car.prototype.getAge = function() {
//     return new Date().getFullYear() - this.year
// };
//
// let ford = new Car('Ford', 2015);
// let bmw = new Car('BMW', 2017);
//
// function Car() {
//     this.name = name;
//     this.year = year;
// }
//
//
// console.log(ford);
// console.log(bmw);




let ford = Object.create({
    calculateDistanceYear: function () {
        Object.defineProperty(this, 'distancePerYear', {
            value: (this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: '2015',
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: '120500',
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function () {
            console.log('Получаем возраст')
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log('Установили значение')
        }
    }
});

console.log(ford);












<<<<<<< HEAD
=======
// let p = document.querySelector('#root');
// let button = document.querySelector('#inputeText');
// let input = document.querySelector('#inputID')

// function nameF() {
//     console.log('click');
//     p.textContent = input.value
// }

// button.addEventListener('click', nameF);

// p.addEventListener('mouseenter', function () {
//     console.log('Mouse up!');
//     p.innerHTML = 'WiseINC';
// })
//                                         // события мыши
// p.addEventListener('mouseleave', function () {
//     console.log('Mouse up!');
//     p.innerHTML = 'NoWISE = )';
// })

// const divs = document.querySelectorAll('div');
// const link = document.querySelector('.link')

// for(let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation()
//         console.log(event)
//         console.log(this.getAttribute('class'))
//     })
// }

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     let div = link[0];

//     // if(div.style.display === 'none') {
//     //     div.style.display = 'flex'
//     // } else {
//     //     div.style.display = 'none';
//     // }

//     div.style.display === div.style.display === 'none'
//     ? 'flex'
//     : 'none'

// })

// const p = document.querySelectorAll('p')

// for(let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'red'
//     })
// }

const str = '1,2,3,4,5,6,7,8,9';

const array = str.split(','); // разделяет каждое значение - , 

console.log(array.join(';')); // join соеденяет все элементы масива ;

console.log(array.reverse()) // делает реверс масива


array.splice(1, 2) // splice выбирает нужную часть масива и удаляет ее (у splice много возможностей) 

array.splice(1, 2, 'new item') // выбирает место, удаляет там нужное количество элементов и вставляет туда наш новый элемент масива

array.splice(1, 0, 'new item') // ничего не удаляет, только добавляет в нужно место новый элемент в масив
  
const newArray = array.concat([32,2,3]) // создаем новую переменную, входим в существующий масив и добавляем в него новый масив с новыми элементами в нем

console.log(array)

 console.log(newArray);


 const oldArry = [1,2,3,4,5,6,7,8,9,10].filter(function(i) { // filter фильтрует все значения элементы
     return i % 2 !== 0;                                    // масива и выполняет парметры указанные
 })                                                         // в функции

 console.log(oldArry);


 let newArrytwo = str;

    function nameFuncTwo(newArrytwo) {
        newArrytwo.map(return parseInt(i))
    }
>>>>>>> 96bfda5e7e501525c9373db48ffae4eebe3d76e4
