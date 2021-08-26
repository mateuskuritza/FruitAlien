import Fruit from "../Fruit";

const bananaImg = document.querySelector("#banana") as HTMLImageElement;

export default class Banana extends Fruit {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, bananaImg, 61, 67);
    }

}