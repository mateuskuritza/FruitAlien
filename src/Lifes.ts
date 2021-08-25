export default class Lifes {

    private _lifesQuantity: number = 4;
    private _heart: string = '<img alt="life heart" src="images/heart.png"/> ';
    private _emptyHeart: string = '<img alt="empty life heart" src="images/heart-empty.png"/> '
    private _container: Element;

    constructor(container: Element) {
        this._container = container;
    }

    reset() {
        this._lifesQuantity = 4;
        this.draw();
    }

    decreaseOne() {
        this._lifesQuantity--;
        this.draw();
    }

    draw() {
        const drawHearts = Array(4).fill(0).map((e, i) => {
            if (i + 1 <= this._lifesQuantity) return this._heart
            return this._emptyHeart
        }).join(' ');
        this._container.innerHTML = drawHearts;
    }

    get lifesQuantity(): number {
        return this._lifesQuantity;
    }
}