import Gameboard from "./gameboard";
import Player from "./player";

const Game = (type) => {
  const p1 = Player("human");
  let p2;
  if (type === "singlePlayer") {
    p2 = Player("computer");
  } else {
    p2 = Player("human");
  }
};

const p1Board = Gameboard();
const p2Board = Gameboard();
