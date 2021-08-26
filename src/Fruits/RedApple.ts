import Fruit from "../Fruit";

const redAppleImg = document.querySelector("#redApple") as HTMLImageElement;

export default class RedApple extends Fruit {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, redAppleImg, 64, 67);
        this.points = 10;
    }

}