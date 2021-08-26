import Drawable from "./Drawable";

export default abstract class AutonomousObject extends Drawable {

    speedY: number = 10;

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement, sizeX: number, sizeY: number) {
        super(canvas, imagePath, Math.random() * (canvas.width), 0, sizeX, sizeY);
    }

    move() {
        this.positionY -= this.speedY;
    }
}