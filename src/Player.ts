import Drawables from "./Drawable";

export default class Player extends Drawables {

    speedX: number = 3;
    movingIntervalId: number;

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement) {
        super(canvas, imagePath, canvas.width / 2, canvas.height - 97, 53, 97);
    }

    move(key: string) {
        if (key === "ArrowRight") {
            this.positionX += this.speedX;
            this.draw();
        }
        if (key === "ArrowLeft") {
            this.positionX -= this.speedX;
            this.draw();
        }
    }

    stop() {
        clearInterval(this.movingIntervalId);
    }
}