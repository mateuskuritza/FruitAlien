import AutonomousObject from "./AutonomousObject";
import AllFruits from "./Fruits/AllFruits";
import Player from "./Player";

export default class Game {

    player: Player;
    gameIntervalId: number;
    spawnIntervalId: number;
    canvas: HTMLCanvasElement;
    objects: AutonomousObject[] = [];
    context: CanvasRenderingContext2D;
    screenWidth: number;
    screenHeight: number;
    runningGame: boolean = false;

    constructor(canvas: HTMLCanvasElement, player: Player) {
        this.canvas = canvas;
        this.player = player;
        this.context = canvas.getContext('2d');
        this.screenHeight = canvas.height;
        this.screenWidth = canvas.width;
    }

    start() {
        if (!this.runningGame) {
            this.gameIntervalId = window.setInterval(() => this.loop(), 1000 / 60);
            this.spawnIntervalId = window.setInterval(() => this.spawnRandomFruit(), 700);
            this.runningGame = true;
        }
    }

    loop() {
        this.updateState();
        this.checkCollisions();
        this.render();
    }

    render() {
        this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.player.draw();
        this.objects.forEach(object => object.draw());
    }

    checkCollisions() {
        this.objects.forEach(object => this.player.checkCollision(object));
    }

    updateState() {
        this.objects.forEach(object => object.move());
        this.objects.forEach(object => {
            if (object.outOfScreen()) {
                this.objects = this.objects.filter(obj => obj !== object);
            }
        });
    }

    restart() {
        clearInterval(this.gameIntervalId);
        clearInterval(this.spawnIntervalId);
        this.objects = [];
        this.runningGame = false;
        this.start();
    }

    spawnRandomFruit() {
        const random = Math.random() * 100;
        let fruit;

        if (random > 70) fruit = new AllFruits.Orange(this.canvas);
        if (random > 40 && random <= 70) fruit = new AllFruits.RedApple(this.canvas);
        if (random > 20 && random <= 40) fruit = new AllFruits.Watermelon(this.canvas);
        if (random > 5 && random <= 20) fruit = new AllFruits.StrawBerry(this.canvas);
        if (random <= 5) fruit = new AllFruits.Banana(this.canvas);

        this.objects.push(fruit);
    }
}