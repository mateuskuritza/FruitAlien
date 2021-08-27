import AutonomousObject from "./AutonomousObject";
import Drawables from "./Drawable";

export default class Player extends Drawables {

    speedX: number = 10;

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement) {
        super(canvas, imagePath, canvas.width / 2, canvas.height - 97, 53, 97);
    }

    move(e: any) {
        if (e.key) this.arrowMove(e.key);
        if (e.touches) this.touchMove(e.touches[0].clientX);
    }

    arrowMove(key: string) {
        if (key === "ArrowRight" && this.positionX < this.screenWidth - 53) {
            this.positionX += this.speedX;
        }
        if (key === "ArrowLeft" && this.positionX > 0) {
            this.positionX -= this.speedX;
        }
    }

    touchMove(position: number) {
        this.positionX = position;
    }

    checkCollision(object: AutonomousObject) {
        const distance = Math.sqrt((this.positionX - object.positionX) ** 2 + (this.positionY - object.positionY) ** 2);
        return distance < this.sizeY / 2 + object.sizeY / 2;
    }
}