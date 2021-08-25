export default class Lifes {

    lifesQuantity: number = 4;
    private heart: string = '<img alt="life heart" src="images/heart.png"/> ';
    private emptyHeart: string = '<img alt="empty life heart" src="images/heart-empty.png"/> '
    private container: Element;

    constructor(container: Element) {
        this.container = container;
    }

    reset() {
        this.lifesQuantity = 4;
        this.draw();
    }

    decreaseOne() {
        this.lifesQuantity--;
        this.draw();
    }

    draw() {
        const drawHearts = Array(4).fill(0).map((e, i) => {
            if (i + 1 <= this.lifesQuantity) return this.heart
            return this.emptyHeart
        }).join(' ');
        this.container.innerHTML = drawHearts;
    }
}