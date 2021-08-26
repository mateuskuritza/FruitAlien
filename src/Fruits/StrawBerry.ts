import Fruit from "../Fruit";

const strawberryImg = document.querySelector("#strawberry") as HTMLImageElement;

export default class StrawBerry extends Fruit {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, strawberryImg, 65, 67);
    }

}