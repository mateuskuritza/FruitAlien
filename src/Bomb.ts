import AutonomousObject from "./AutonomousObject";

const bombImg = document.querySelector("#bomb") as HTMLImageElement;
export default class Bomb extends AutonomousObject {

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, bombImg, 67, 67);
        this.points = -Infinity;
        this.speedY = 3;
    }

}