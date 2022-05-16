import getCoordinates from './getGridCoordinates';

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
    if (
      this.board[coordinatesX][coodinatesY] === 'carrier' ||
      this.board[coordinatesX][coodinatesY] == 'battleship' ||
      this.board[coordinatesX][coodinatesY] == 'cruiser' ||
      this.board[coordinatesX][coodinatesY] == 'submarine' ||
      this.board[coordinatesX][coodinatesY] == 'destroyer'
    ) {
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
  getsCoordinatesOfPlacedShipsFromDom() {
    let carrier = {
      x: getCoordinates.getCoordinatesX('.carrierPlaced'),
      y: getCoordinates.getCoordinatesY('.carrierPlaced'),
    };
    let battleship = {
      x: getCoordinates.getCoordinatesX('.battleshipPlaced'),
      y: getCoordinates.getCoordinatesY('.battleshipPlaced'),
    };
    let cruiser = {
      x: getCoordinates.getCoordinatesX('.cruiserPlaced'),
      y: getCoordinates.getCoordinatesY('.cruiserPlaced'),
    };
    let submarine = {
      x: getCoordinates.getCoordinatesX('.submarinePlaced'),
      y: getCoordinates.getCoordinatesY('.submarinePlaced'),
    };
    let destroyer = {
      x: getCoordinates.getCoordinatesX('.destroyerPlaced'),
      y: getCoordinates.getCoordinatesY('.destroyerPlaced'),
    };
    return { carrier, battleship, cruiser, submarine, destroyer };
  },
};

export default () => {
  let Gameboard = Object.create(boardActions);
  Gameboard.board = [...Array(10)].map(() => Array(10).fill(''));
  Gameboard.shipLibrary = [];
  return Gameboard;
};
