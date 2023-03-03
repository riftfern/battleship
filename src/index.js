import Game from "./components/factories/game";
import { elements } from "./components/viewables/base";
import "./styles.css";

let gameType = "singleplayer";
let game = Game(gameType);

game.renderGrids();

game.renderFleet();

elements.autoPlaceBtn.addEventListener("click", (e) => {
  console.log("autoplaced player fleet");
  game.autoPlace();
});

elements.startBtn.addEventListener("click", (e) => {
  console.log("GAME START");
  game.startGame();
});

elements.playAgainBtn.addEventListener("click", (e) => {
  console.log("LETS PLAY AGAIN");
  game.playAgain();
});
