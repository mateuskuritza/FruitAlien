import Fruit from "../Fruit";

const watermelonImg = document.querySelector("#watermelon") as HTMLImageElement;

export default class Watermelon extends Fruit {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, watermelonImg, 82, 67);
    }

}