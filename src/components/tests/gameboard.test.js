import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";

describe("Gameboard", () => {
  describe("board", () => {
    const testBoard = Gameboard();

    test("empty board", () => {
      const actual = testBoard.getBoard().every((square) => square === null);
      const expected = false;
      expect(actual).toBe(expected);
    });
    test("board row", () => {
      const actual = testBoard.getBoard().length;
      const expected = 10;
      expect(actual).toBe(expected);
    });
    test("board column", () => {
      const actual = testBoard.getBoard()[0].length;
      const expected = 10;
      expect(actual).toBe(expected);
    });
  });

  describe("All ships placed", () => {
    const testBoard = Gameboard();
    const carrier = Ship("carrier");
    const battleship = Ship("battleship");
    const cruiser = Ship("cruiser");
    const submarine = Ship("submarine");
    const destroyer = Ship("destroyer");

    test("no ships placed", () => {
      const actual = testBoard.areAllShipsPlaced();
      expect(actual).toBe(false);
    });
    test("some ships placed", () => {
      testBoard.placeShip(carrier, 0, 0);
      testBoard.placeShip(battleship, 1, 0);
      const actual = testBoard.areAllShipsPlaced();
      expect(actual).toBe(false);
    });
    test("Placed all ships", () => {
      testBoard.placeShip(cruiser, 2, 0);
      testBoard.placeShip(submarine, 3, 0);
      testBoard.placeShip(destroyer, 4, 0);
      const actual = testBoard.areAllShipsPlaced();
      expect(actual).toBe(true);
    });
  });

  describe("auto place fleet", () => {
    const testBoard = Gameboard();
  });
});
