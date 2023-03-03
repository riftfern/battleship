import Ship from "../factories/ship";

export const SHIP_TYPES = [
  "carrier",
  "battleship",
  "crusier",
  "submarine",
  "destroyer",
];

export const SHIP_LENGTHS = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

const random = (size = 10) => Math.floor(Math.random() * size);

export const randomCords = (size = 10) => [random(size), random(size)];

export const createFleet = (types) => {
  const fleet = {};
  types.forEach((type) => (fleet[type] = Ship(type)));
  return fleet;
};
