const ShipActions = {
  showPositionX() {
    return this.positionX;
  },
  showPositionY() {
    return this.positionY;
  },
  isDestroyed() {
    return this.printed.includes('') ? false : true;
  },
};

export default (length, positionX, positionY) => {
  let ship = Object.create(ShipActions);
  ship.length = length;
  ship.isSunk = false;
  ship.positionX = positionX;
  ship.positionY = positionY;
  ship.printed = Array(length).fill('');
  return ship;
};
