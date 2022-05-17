import generateBoardShips from './generateBoardShips';
import animations from './animations';

const boardActions = {
  cataloguesShips() {
    let ships = generateBoardShips.createShips();
    ships.forEach(ship => this.shipLibrary.push(ship));
  },
  fillsBoardWithShips() {
    for (let ship of this.shipLibrary)
      for (let y of ship.positionY) this.board[ship.positionX[0]][y] = 'ship';
  },
  receivesHit(coordinatesOfHit, tile) {
    let coordinatesX = coordinatesOfHit[0];
    let coordinatesY = coordinatesOfHit[1];
    this.handlesHit(coordinatesX, coordinatesY, tile);
    if (
      this.board[coordinatesX][coordinatesY] === 'carrier' ||
      this.board[coordinatesX][coordinatesY] == 'battleship' ||
      this.board[coordinatesX][coordinatesY] == 'cruiser' ||
      this.board[coordinatesX][coordinatesY] == 'submarine' ||
      this.board[coordinatesX][coordinatesY] == 'destroyer' ||
      this.board[coordinatesX][coordinatesY] == 'ship'
    ) {
      animations.animateHitTile(tile);
      this.board[coordinatesX][coordinatesY] = 'X';
      for (let ship of this.shipLibrary) {
        for (let x of ship.positionX) {
          for (let y of ship.positionY) {
            if (y == coordinatesY && x == coordinatesX) {
              ship.printed[ship.positionY.indexOf(y)] = 'X';
              ship.toggleIsSunkStatus();
            }
          }
        }
      }
    }
  },
  handlesHit(coordinatesX, coodinatesY, tile) {
    if (this.board[coordinatesX][coodinatesY] === '') {
      animations.animateMissTile(tile);
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
