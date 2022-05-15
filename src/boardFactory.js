const boardActions = {
  catalogueShips(...ships) {
    ships.forEach(ship => this.shipLibrary.push(ship));
  },
  generatesBoardWithShips() {
    generatedBoard = this.board;
    for (let ship of this.shipLibrary)
      for (x of ship.positionX) board[x][ship.positionY[0]] = 'Ship';
    return generatedBoard;
  },
  receiveHit(coordinatesOfHit) {
    let coordinatesX = coordinatesOfHit[0];
    let coodinatesY = coordinatesOfHit[1];
    if (this.generatesBoardWithShips[coordinatesX][coodinatesY] === 'ship')
      for (let ship of this.shipLibrary)
        for (let x of ship.positionX)
          if (x === coordinatesX && ship.positionY[0] === coodinatesY)
            ship.printed[ship.positionX.indexOf(x)] = 'X';
  },
  areAllShipsDestroyed() {
    true
      ? this.shipLibrary.filter(ship => ship.isSunk).length ===
        this.shipLibrary.length
      : false;
  },
};

export default () => {
  let Gameboard = Object.create(boardActions);
  board = [...Array(10)].map(() => Array(10).fill(''));
  return Gameboard;
};
