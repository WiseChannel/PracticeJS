
const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue').create()


class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
    }
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName);
        this.color = color;
        this.size = size;
    }

    create() {
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`;

        document.querySelector('.wrapper').insertAdjacentElement('afterbegin',
            this.$el)

        return this
    }
}

