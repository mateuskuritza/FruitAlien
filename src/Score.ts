export default class Score {

    private _score: number = 0;
    private _container: Element;

    constructor(container: Element) {
        this._container = container;
    }

    reset() {
        this._score = 0;
    }

    changeScoreTo(value: number) {
        this._score = value;
        this.draw();
    }

    draw() {
        this._container.innerHTML = 'Score: ' + this._score;
    }

    get score(): number {
        return this._score;
    }
}