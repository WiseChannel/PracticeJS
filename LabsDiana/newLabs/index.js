const square = document.getElementsByClassName('square')
const triangleUp = document.getElementsByClassName('triangle-up')
const container = document.getElementsByClassName('container')

const IncreaseSize = document.querySelector('#IncreaseSize')
    .addEventListener('click', () => {
        square.style.backgroundSize = '5'
        square.style.height = '5px'
    })
const CreateNewShape = document.querySelector('#CreateNewShape')
    //.addEventListener('click', () => {})

// Класс для вычисления периметра фигуры и привязки обработчика к событию "изменение периметра"
class figurePerimeterCalculation {
    // привязка обработчика к событию
}

// Базовый класс - полская фигура
class flatFigure {
    Side(side) {
        let startingSide = side.document.style.weight = 0 // начальное значение стороны
        // изменение периметра
    }
}

class Triangle{
    triangle() {
        const div = document.createElement('div').className = 'square'

    }
}

class regularTriangle extends flatFigure {
    constructor(triangle, side) {
        super();
        triangle = 1
        side = new Triangle(triangle)
    }

    perimeterChange() {
        // изменение периметра
    }
}

class Square extends flatFigure {
    constructor(triangle, side) {
        super();
        triangle = 1
        side = new Triangle(triangle)
    }

    perimeterChange() {
        // изменение периметра
    }
}

function main() {
    const flatFigure = new flatFigure()
    const Triangle = new Triangle()
    const regularTriangle = new regularTriangle()
}

function test() {
    square.style.weight = '5px'
    square.style.height = '5px'
}

console.log(square)
