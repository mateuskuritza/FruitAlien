import Lifes from "./Lifes";
import Score from "./Score";
import Player from "./Player";
import Game from "./Game";

const scoreContainer = document.querySelector("#score");
const lifesContainer = document.querySelector("#lifes");
const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: HTMLDivElement = document.querySelector("#app");
const startButton = document.querySelector("#startButton");
const loseText = document.querySelector("#lose");

const screenWidth = app.clientWidth;
const screenHeight = app.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const alien = document.querySelector("#alien") as HTMLImageElement;
const lifes = new Lifes(lifesContainer);
const score = new Score(scoreContainer);
const player = new Player(canvas, alien);
const game = new Game(canvas, player, lifes, score, loseText);

window.setTimeout(() => player.draw(), 100);
window.addEventListener('keydown', (e) => player.move(e));
canvas.addEventListener('touchmove', (e) => player.move(e));

startButton.addEventListener("click", () => game.start());