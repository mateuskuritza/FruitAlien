import AutonomousObject from "./AutonomousObject";
import Drawables from "./Drawable";

export default class Player extends Drawables {

    speedX: number = 5;

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement) {
        super(canvas, imagePath, canvas.width / 2, canvas.height - 97, 53, 97);
    }

    move(key: string) {
        if (key === "ArrowRight" && this.positionX < this.screenWidth - 53) {
            this.positionX += this.speedX;
            this.draw();
        }
        if (key === "ArrowLeft" && this.positionX > 0) {
            this.positionX -= this.speedX;
            this.draw();
        }
    }

    checkCollision(object: AutonomousObject) {
        const distance = Math.sqrt((this.positionX - object.positionX) ** 2 + (this.positionY - object.positionY) ** 2);
        return distance < this.sizeY + object.sizeY;
    }
}