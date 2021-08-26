import Lifes from "./Lifes";
import Score from "./Score";
import Player from "./Player";
import Game from "./Game";


const scoreContainer = document.querySelector("#score");
const lifesContainer = document.querySelector("#lifes");
const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: HTMLDivElement = document.querySelector("#app");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");

const screenWidth = app.clientWidth;
const screenHeight = app.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const alien = document.querySelector("#alien") as HTMLImageElement;
const lifes = new Lifes(lifesContainer);
const score = new Score(scoreContainer);
const player = new Player(canvas, alien);
const game = new Game(canvas, player);

window.setTimeout(() => player.draw(), 100);
window.addEventListener('keydown', (e) => player.move(e.key));

startButton.addEventListener("click", () => game.start());
restartButton.addEventListener("click", () => game.restart());