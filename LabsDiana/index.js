
class Airport {
    locatorMark = 'There is no one on the corrugated packaging!';

    shuttleCheck() {
        console.log(this.locatorMark)
    }
}

const button = document.querySelector('#Start')
const airport = new Airport()
button.addEventListener('click', () => {
    console.log('New board at the airport.', airport.shuttleCheck())
    Main()
})


class Board {
    locator = '№Airport'
    nameBoard = '№Ty-134'
    number = '№21'
    country = 'Russia'

    discover(locator) {
        locator.push('New board detected!')
        console.log('Update Locator', locator)
    }

    infoBoard() {
        setTimeout(console.log(`Board name: ${this.nameBoard}, Number: ${this.number}, Country: ${this.country}`), 3000)
    }
}

class Locator {

    discover() {
        const nameBoard = new Board();
        nameBoard.discover()
        setTimeout(console.log(`Name Board: ${nameBoard}`), 3000)
        console.log(`Name Board: ${nameBoard}`)
    }

    locatorM() {
        this.locatorMark('New board detected!')
    }
}

class Mark {
    constructor(mark) {
        mark = ''
    }
}

class Dispatcher extends Airport {

    constructor() {
        super();
        const boardInfo = new Board()
        this.locatorMark(`New Board ${boardInfo.infoBoard()}`)
    }

    locatorMark() {
        this.locator.push('New local marker!')
    }
}

function Main() {
    const locator = new Locator()
    const dispatcher = new Dispatcher()
    const board = new Board()

    board.discover()

    locator.discover()
    locator.locatorM()

    dispatcher.locatorMark()
}

