import { ship } from "./ship";

const testShip = ship(3);
testShip.hit();
testShip.hit();
testShip.hit();

test("hit() increases the times hit counter", () => {
  expect(testShip.hit()).toBe(4);
});

test("sink returns true if timesHit equals length", () => {
  expect(testShip.sink()).toBe(true);
});
