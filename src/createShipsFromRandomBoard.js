import shipFactory from './shipFactory';

//THIS WORKS

export default {
  getCoordinatesX(board, check) {
    let coordinatesX = [];
    for (let x = 0; x < board.length; x++)
      for (let y = 0; y < board.length; y++)
        if (board[x][y] == check) coordinatesX.push(x);

    coordinatesX = coordinatesX.filter(function (item, pos) {
      return coordinatesX.indexOf(item) == pos;
    });
    return coordinatesX;
  },
  getCoordinatesY(board, check) {
    let coordinatesY = [];
    for (let x = 0; x < board.length; x++)
      for (let y = 0; y < board.length; y++)
        if (board[x][y] == check) coordinatesY.push(y);

    coordinatesY = coordinatesY.filter(function (item, pos) {
      return coordinatesY.indexOf(item) == pos;
    });
    return coordinatesY;
  },

  getRandomShip(length, board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let ship = shipFactory(length, coordinatesX, coordinatesY);
    if (ship.positionY.length === 1) ship.reversed = true;
    return ship;
  },

  registerRandomShips(board) {
    let carrier = this.getRandomShip(5, board, 'carrier');
    let battleship = this.getRandomShip(4, board, 'battleship');
    let cruiser = this.getRandomShip(3, board, 'cruiser');
    let submarine = this.getRandomShip(3, board, 'submarine');
    let destroyer = this.getRandomShip(2, board, 'destroyer');
    return [carrier, battleship, cruiser, submarine, destroyer];
  },
};
