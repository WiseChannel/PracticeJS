// let nameCar = 'Ford';
// let carYear = '2008';
// let personYear = '1999';

// function calculateCar() {
//     // let carYear = '2008';
//     // let personYear = '1999';
//     let result = carYear - personYear;

//     if(result === 9) {
//         console.log('Result = 9');
//     } else if (result === 8) {
//         console.log('Result = 8')
//     } else {
//         console.log('Result !=')
//     }

//     // switch(result === 9) {
//     //     case 
//     // }

//     return result;
// }


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


// // let div = document.getElementById('root')
// // let p = document.getElementsByClassName('root')     // старые методы обращение через DOM
// // let h1 = document.getElementsByTagName('h1')


// // let div = document.querySelector('#nameID')   // позволяет более удобно получить элементы из ID
// // let p = document.querySelectorAll('.p') //  получаем всю колекцию с класса
// // let h1 = document.querySelector('h1') // получаем доступ ко-всем тегам h1



// function inner() {
//     let ul = document.querySelector('#root');
//     ul.innerHTML = '<p>Hello Wise</p>';
//     return ul;
// }

// inner()

// const a = document.querySelector('a');
// const oldHref = a.getAttribute('href')
// a.setAttribute('href', 'habr.com')


// const button = document.querySelector("#button");
// const p = document.querySelector('#root')
// const buttonTwo = document.querySelector('#buttontwo');
    
//     function nameFunc() {
//         console.log('Click button');
//         p.textContent = 'JS';
//     }

//     function twoFunc() {
//         console.log('TwoButton');
//         p.textContent = 'NoJS';
//     }

// buttonTwo.addEventListener('click', twoFunc);
// button.addEventListener('click', nameFunc);

// const input = document.querySelector('#inputeText');

//     function inputeT() {
//         console.log('click');
//         p.textContent = p.value;
//     }

//     input.addEventListener('click', inputeT);

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