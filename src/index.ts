import Lifes from "./Lifes";
import Score from "./Score";
import Player from "./Player";

const scoreContainer = document.querySelector("#score");
const lifesContainer = document.querySelector("#lifes");
const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const app: HTMLDivElement = document.querySelector("#app");

const screenWidth = app.clientWidth;
const screenHeight = app.clientHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

const alien = document.querySelector("#alien") as HTMLImageElement;
const banana = document.querySelector("#banana") as HTMLImageElement;
const orange = document.querySelector("#orange") as HTMLImageElement;
const redApple = document.querySelector("#red-apple") as HTMLImageElement;
const strawberry = document.querySelector("#strawberry") as HTMLImageElement;
const watermelon = document.querySelector("#watermelon") as HTMLImageElement;

const lifes = new Lifes(lifesContainer);
const score = new Score(scoreContainer);
const player = new Player(canvas, alien)

window.setTimeout(() => player.draw(), 100);
window.addEventListener('keydown', (e) => player.move(e.key));


