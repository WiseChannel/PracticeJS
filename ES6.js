
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



//Spread оператор

const arr2 = [1,2,3];

const args = Math.max(...arr2);
console.log(args);


// Destructuring - деструктуризация

const person = {
    firstName: 'Ilya',
    lastName: 'Wise',
    age: '20'
};

const {firstName, lastName} = person;
console.log(firstName,lastName);

// Array Destructuring

const fib = [1,2,3,4,5,6,7];

const [a, b, c] = fib;


// Objects

const x = 10;
const y = 20;



// Prototypes

const  animal = {
    say: function() {
        console.log(this.name, 'goes' , this.voice);
    }
};

function createAnimal(name,voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function () {
    console.log(this.name, 'gouse', this.voice)
};

const dog = createAnimal('Lex', 'gav')
const cat = createAnimal('Barsik', 'mow')

dog.say();
cat.say();

// Class

class Animals {
    constructor(name,voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(`${this.name} ${this.voice}`)
    }
}

// duck => Bird.prototype => Animals.prototype => Object.prototype => null
class Bird extends Animals {
    constructor(name,voice, CanFly) {
        super(name,voice)
        this.CanFly = CanFly;
    }
}

const duck = new Bird('Duckss', 'quackss', true)
duck.say();

