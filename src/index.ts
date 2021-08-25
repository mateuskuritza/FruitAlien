import Lifes from "./Lifes";
import Score from "./Score";

const scoreContainer = document.querySelector("#score");
const lifesContainer = document.querySelector("#lifes");
const canvas = document.querySelector("#canvas");

const lifes = new Lifes(lifesContainer);
const score = new Score(scoreContainer);