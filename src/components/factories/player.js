import { SHIP_TYPES, randomCords, createFleet } from "../helpers/helpers";

const Player = (type = "human") => {
  let fleet = createFleet(SHIP_TYPES);

  const getType = () => type;
  const getFleet = () => fleet;

  const attack = (y, x, enemyBoard) => enemyBoard.receiveAttack(y, x);

  const autoAttack = (enemyBoard) => {
    const [y, x] = randomCords();
    const cell = enemyBoard.getBoard()[y][x];
    if (cell === "miss" || cell === "hit") {
      autoAttack(enemyBoard);
    } else {
      enemyBoard.receiveAttack(y, x);
    }
  };
  const resetFleet = () => (fleet = createFleet(SHIP_TYPES));

  return { getType, getFleet, attack, autoAttack, resetFleet };
};

export default Player;
