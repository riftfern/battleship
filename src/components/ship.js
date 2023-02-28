const ship = (length) => {
  return {
    length: length,
    timesHit: 0,
    isSunk: false,

    hit() {
      let hitCount = this.timesHit;
      hitCount++;
      this.timesHit = hitCount;
      return this.timesHit;
    },
    sink() {
      if (this.timesHit >= length) {
        this.isSunk = true;
        return this.isSunk;
      }
    },
  };
};

export { ship };
