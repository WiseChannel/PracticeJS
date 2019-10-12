
// Ключевые слова для объявления переменных
let nameNewVariable = 'Nice';
const nameNewConst = 'True';


// Стрелочные фукнции
let nameFunc = () => {
    const name = 'Ilya';
    console.log(`Hello ${name}`);
};
nameFunc();


// Rest параметр

let arr =  [1,2,3,4,5,6];

function nameFuncF(...arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

nameFuncF(...arr);

