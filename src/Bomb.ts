import AutonomousObject from "./AutonomousObject";

export default class Bomb extends AutonomousObject {

    constructor(canvas: HTMLCanvasElement, imagePath: HTMLImageElement, sizeX: number, sizeY: number) {
        super(canvas, imagePath, sizeX, sizeY);
    }

}