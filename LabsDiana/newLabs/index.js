const square = document.querySelector('.square')
const triangleUp = document.querySelector('.triangle-up')
const container = document.querySelector('.container')


// Класс для вычисления периметра фигуры и привязки обработчика к событию "изменение периметра"
class figurePerimeterCalculation {
    // вычисление периметра фигуры
    constructor(square, triangleUp) {
        this.square = square.document.body.style.height
        this.triangleUp = triangleUp.document.body.style.height
    }

    // привязка обработчика к событию
    eventHandler() {
        IncreaseSize.addEventListener('click', () => {
            const div = document.createElement('div').className = 'square'
            container.appendChild(div)
        })
    }
}

// Базовый класс - полская фигура
class flatFigure {
    Side() {
        let startingSide = square.document.style.weight = 0 // начальное значение стороны
    }

    // изменение периметра
    perimeterChange() {
        square.style.width + '5px'
    }
}

class Triangle{
    triangle() {
        const div = document.createElement('div').className = 'square'
        container.appendChild(div)
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

// function main() {
//     //const flatFigure = new flatFigure()
//     const Triangle = new Triangle()
//     Triangle.triangle()
//     //const regularTriangle = new regularTriangle()
// }

const flatFigureM = new flatFigure()

const IncreaseSize = document.querySelector('#IncreaseSize').addEventListener('click', () => {
    let WIDTH = 120
    square.style.width = WIDTH + 'px'
    WIDTH + 100
    console.log(WIDTH + 10);
})
const CreateNewShape = document.querySelector('#CreateNewShape')
