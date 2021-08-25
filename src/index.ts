import Lifes from "./Lifes";

const scoreContainer = document.querySelector("#score");
const lifesContainer = document.querySelector("#lifes");
const canvas = document.querySelector("#canvas");

const lifes = new Lifes(lifesContainer);

lifes.draw();