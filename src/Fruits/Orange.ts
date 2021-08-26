import Fruit from "../Fruit";

const orangeImage = document.querySelector("#orange") as HTMLImageElement;

export default class Orange extends Fruit {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, orangeImage, 64, 67);
    }

}