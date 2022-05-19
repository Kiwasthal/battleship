import shipFactory from './shipFactory';

// THIS WORKS

export default {
  getCoordinatesX(board, check) {
    let coordinatesX = [];
    for (let x = 0; x < board.length; x += 1) {
      for (let y = 0; y < board.length; y += 1) {
        if (board[x][y] == check) coordinatesX.push(x);
      }
    }

    coordinatesX = coordinatesX.filter(
      (item, pos) => coordinatesX.indexOf(item) == pos,
    );
    return coordinatesX;
  },
  getCoordinatesY(board, check) {
    let coordinatesY = [];
    for (let x = 0; x < board.length; x += 1) {
      for (let y = 0; y < board.length; y += 1) {
        if (board[x][y] == check) coordinatesY.push(y);
      }
    }

    coordinatesY = coordinatesY.filter(
      (item, pos) => coordinatesY.indexOf(item) === pos,
    );
    return coordinatesY;
  },

  getRandomShip(length, board, check) {
    const coordinatesX = this.getCoordinatesX(board, check);
    const coordinatesY = this.getCoordinatesY(board, check);
    const ship = shipFactory(length, coordinatesX, coordinatesY);
    if (ship.positionY.length === 1) ship.reversed = true;
    return ship;
  },

  registerRandomShips(board) {
    const carrier = this.getRandomShip(5, board, 'carrier');
    const battleship = this.getRandomShip(4, board, 'battleship');
    const cruiser = this.getRandomShip(3, board, 'cruiser');
    const submarine = this.getRandomShip(3, board, 'submarine');
    const destroyer = this.getRandomShip(2, board, 'destroyer');
    return [carrier, battleship, cruiser, submarine, destroyer];
  },
};
