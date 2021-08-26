export default abstract class Drawable {

    context: CanvasRenderingContext2D;
    imagePath: HTMLImageElement;
    sizeX: number;
    sizeY: number;
    positionX: number;
    positionY: number;
    screenWidth: number;
    screenHeight: number;

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement, positionX: number, positionY: number, sizeX: number, sizeY: number) {
        this.context = canvas.getContext('2d');
        this.imagePath = imagePath;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.positionX = positionX;
        this.positionY = positionY;
        this.screenWidth = canvas.width;
        this.screenHeight = canvas.height;
    }

    draw() {
        this.context.drawImage(this.imagePath, this.positionX, this.positionY, this.sizeX, this.sizeY);
    }
}