import shipFactory from './shipFactory';

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
  registerRandomCarrier(board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let carrier = shipFactory(5, coordinatesX, coordinatesY);
    return carrier;
  },
  registerRandomBattleship(board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let battleship = shipFactory(4, coordinatesX, coordinatesY);
    return battleship;
  },
  registerRandomCruiser(board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let cruiser = shipFactory(3, coordinatesX, coordinatesY);
    return cruiser;
  },
  registerRandomSubmarine(board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let submarine = shipFactory(3, coordinatesX, coordinatesY);
    return submarine;
  },
  registerRandomDestroyer(board, check) {
    let coordinatesX = this.getCoordinatesX(board, check);
    let coordinatesY = this.getCoordinatesY(board, check);
    let destroyer = shipFactory(2, coordinatesX, coordinatesY);
    return destroyer;
  },
  registerRandomShips(board) {
    let carrier = this.registerRandomCarrier(board, 'carrier');
    let battleship = this.registerRandomBattleship(board, 'battleship');
    let cruiser = this.registerRandomCruiser(board, 'cruiser');
    let submarine = this.registerRandomSubmarine(board, 'submarine');
    let destroyer = this.registerRandomDestroyer(board, 'destroyer');
    return [carrier, battleship, cruiser, submarine, destroyer];
  },
};
