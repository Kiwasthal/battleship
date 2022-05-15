const boardActions = {
  cataloguesShips(...ships) {
    ships.forEach(ship => this.shipLibrary.push(ship));
  },
  fillsBoardWithShips() {
    for (let ship of this.shipLibrary)
      for (let x of ship.positionX) this.board[x][ship.positionY[0]] = 'ship';
  },
  receivesHit(coordinatesOfHit) {
    let coordinatesX = coordinatesOfHit[0];
    let coodinatesY = coordinatesOfHit[1];
    this.handlesHit(coordinatesX, coodinatesY);
    if (this.board[coordinatesX][coodinatesY] === 'ship') {
      this.board[coordinatesX][coodinatesY] = 'X';
      for (let ship of this.shipLibrary)
        for (let x of ship.positionX)
          if (x === coordinatesX && ship.positionY[0] === coodinatesY) {
            ship.printed[ship.positionX.indexOf(x)] = 'X';
            ship.toggleIsSunkStatus();
          }
    }
  },
  handlesHit(coordinatesX, coodinatesY) {
    if (this.board[coordinatesX][coodinatesY] === '') {
      this.board[coordinatesX][coodinatesY] = 'miss';
      return;
    }
    if (this.board[coordinatesX][coodinatesY] === 'miss') return;
    if (this.board[coordinatesX][coodinatesY] === 'X') return;
  },
  areAllShipsDestroyed() {
    return this.shipLibrary.filter(ship => ship.isSunk).length ===
      this.shipLibrary.length
      ? true
      : false;
  },
};

export default () => {
  let Gameboard = Object.create(boardActions);
  Gameboard.board = [...Array(10)].map(() => Array(10).fill(''));
  Gameboard.shipLibrary = [];
  return Gameboard;
};
