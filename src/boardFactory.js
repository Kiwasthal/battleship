import generateBoardShips from './generateBoardShips';
import animations from './animations';

const boardActions = {
  cataloguesShips() {
    const ships = generateBoardShips.createShips();
    ships.forEach((ship) => this.shipLibrary.push(ship));
  },
  fillsBoardWithShips() {
    for (const ship of this.shipLibrary) {
      for (const x of ship.positionX) {
        for (const y of ship.positionY) this.board[x][y] = 'ship';
      }
    }
  },
  receivesHit(coordinatesOfHit, tile) {
    const coordinatesX = coordinatesOfHit[0];
    const coordinatesY = coordinatesOfHit[1];
    this.handlesHit(coordinatesX, coordinatesY, tile);
    if (
      this.board[coordinatesX][coordinatesY] === 'carrier'
      || this.board[coordinatesX][coordinatesY] === 'battleship'
      || this.board[coordinatesX][coordinatesY] === 'cruiser'
      || this.board[coordinatesX][coordinatesY] === 'submarine'
      || this.board[coordinatesX][coordinatesY] === 'destroyer'
      || this.board[coordinatesX][coordinatesY] === 'ship'
    ) {
      animations.animateHitTile(tile);
      this.board[coordinatesX][coordinatesY] = 'X';
      for (const ship of this.shipLibrary) {
        for (const x of ship.positionX) {
          for (const y of ship.positionY) {
            if (y == coordinatesY && x == coordinatesX) {
              if (ship.reversed) {
                ship.printed[ship.positionX.indexOf(x)] = 'X';
              } else ship.printed[ship.positionY.indexOf(y)] = 'X';
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
    if (
      this.board[coordinatesX][coodinatesY] === 'miss'
      || this.board[coordinatesX][coodinatesY] === 'X'
    ) {
    }
  },
  areAllShipsDestroyed() {
    return (
      this.shipLibrary.filter((ship) => ship.isSunk).length
      === this.shipLibrary.length
    );
  },
};

export default () => {
  const Gameboard = Object.create(boardActions);
  Gameboard.board = [...Array(10)].map(() => Array(10).fill(''));
  Gameboard.shipLibrary = [];
  return Gameboard;
};
