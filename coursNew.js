let nameCar = 'Ford';
let carYear = '2008';
let personYear = '1999';

function calculateCar() {
    // let carYear = '2008';
    // let personYear = '1999';
    let result = carYear - personYear;

    if(result === 9) {
        console.log('Result = 9');
    } else if (result === 8) {
        console.log('Result = 8')
    } else {
        console.log('Result !=')
    }

    // switch(result === 9) {
    //     case 
    // }

    return result;
}


// console.log(calculateCar());

// const num = [1,2,3,5,2];

// num.push('Not a num')

//  for(let i = 0; i < 6; i++) {
//      console.log(num[i]);
//  }

let mus = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < mus.length; i++) {
    console.log(mus[i]);
}