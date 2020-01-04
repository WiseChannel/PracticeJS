// __proto__ - прототипное наследование это возможность языка, которая помогает
// уснаследовать что то от родителя объекта/класса

let animal  = {
    eats: 'Pip'
};

let rabbit = {
    jupm: true
};

rabbit.__proto__ = animal;




let Women = {
    money: '0',
    __proto__: this.Men
}

let Men = {
    money: '1000000',
    getMenMoney: console.log('Nice')
}

console.log(Women.money)

try {
    // Сначала выполняется код внутри блока try
    // Если тут нет ошибок, то блок catch игнорируется
} catch (e) {
    // Если же в try есть ошибки, то try прерывается и переходит в catch(e)
    // e - можно выбрать любое другое имя для переменно
    // е - содержит объект ошибки с подробной информацией о произошедшем
}


try {
    console.log('all work')
    alalal // not work
} catch (e) {
    console.log('Err ' + e)
}


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//         script => { alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ ); // функция, объявленная в загруженном скрипте
// });

// Методы работы с масивами

array = ['Один','Два','Три','Четыре',]

console.log(array.reverse())

console.log(array.concat(21)) // добавляет/объеденяет новое значение с маисов

console.log(array.slice(1, 4)) // выводит элементы масива начия со-значения Х по значение Y

console.log(array.splice(1,2,'NewMass')) // splice принимает три параметра. С какого начинаем, какой удаляем и какой добавляем элемент

console.log(array)