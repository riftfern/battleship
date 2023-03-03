import Ship from "../factories/ship";

describe("ship factory", () => {
  describe("properties", () => {
    const testShip = Ship("battleship");
    test("id", () => {
      expect(testShip.id).toBe("battleship");
    });
    test("length", () => {
      expect(testShip.length).toBe(4);
    });
    test("direction", () => {
      expect(testShip.getDirection()).toBe("horizontal");
    });
    test("change direction", () => {
      testShip.changeDirection();
      expect(testShip.getDirection()).toBe("vertical");
    });
  });
  describe("isSunk", () => {
    const testShip = Ship("destroyer");
    test("not sunk", () => {
      expect(testShip.isSunk()).toBe(false);
    });
    test("hit but not sunk", () => {
      testShip.hit(0);
      expect(testShip.isSunk()).toBe(false);
    });
    test("sunk", () => {
      testShip.hit(1);
      expect(testShip.isSunk()).toBe(true);
    });
  });
});
