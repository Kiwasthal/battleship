const ShipActions = {
  getPositionX() {
    return this.positionX;
  },
  getPositionY() {
    return this.positionY;
  },
  isDestroyed() {
    return !this.printed.includes('');
  },
  toggleIsSunkStatus() {
    if (this.isDestroyed()) this.isSunk = true;
  },
};

export default (length, positionX, positionY) => {
  const ship = Object.create(ShipActions);
  ship.length = length;
  ship.isSunk = false;
  ship.positionX = positionX;
  ship.positionY = positionY;
  ship.printed = Array(length).fill('');
  return ship;
};
