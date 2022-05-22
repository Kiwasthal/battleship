export default {
  // From random coordinates
  generateRandomCoordinates(min, max) {
    const oneOrZero = Math.random() > 0.5 ? 1 : 0;
    if (oneOrZero === 0) {
      const startingPostionY = this.randomIntFromInterval(min, max);
      const startingPostionX = this.randomIntFromInterval(min, max);
      return { startingPostionX, startingPostionY, reversed: false };
    }
    if (oneOrZero === 1) {
      const startingPostionY = this.randomIntFromInterval(min, max);
      const startingPostionX = this.randomIntFromInterval(min, max);
      return { startingPostionX, startingPostionY, reversed: true };
    }
  },
  registerCarrierInBoard(board) {
    const carrier = this.generateRandomCoordinates(2, 7);
    if (carrier.reversed) {
      board[carrier.startingPostionX][carrier.startingPostionY] = 'carrier';
      board[carrier.startingPostionX + 1][carrier.startingPostionY] = 'carrier';
      board[carrier.startingPostionX + 2][carrier.startingPostionY] = 'carrier';
      board[carrier.startingPostionX - 1][carrier.startingPostionY] = 'carrier';
      board[carrier.startingPostionX - 2][carrier.startingPostionY] = 'carrier';
    } else {
      board[carrier.startingPostionX][carrier.startingPostionY] = 'carrier';
      board[carrier.startingPostionX][carrier.startingPostionY + 1] = 'carrier';
      board[carrier.startingPostionX][carrier.startingPostionY + 2] = 'carrier';
      board[carrier.startingPostionX][carrier.startingPostionY - 1] = 'carrier';
      board[carrier.startingPostionX][carrier.startingPostionY - 2] = 'carrier';
    }
  },
  registerBattleshipInBoard(board) {
    let stopGenerating = true;
    while (stopGenerating) {
      const battleship = this.generateRandomCoordinates(1, 7);
      if (
        battleship.reversed &&
        board[battleship.startingPostionX][battleship.startingPostionY] ===
          '' &&
        board[battleship.startingPostionX + 1][battleship.startingPostionY] ===
          '' &&
        board[battleship.startingPostionX + 2][battleship.startingPostionY] ===
          '' &&
        board[battleship.startingPostionX - 1][battleship.startingPostionY] ===
          ''
      ) {
        board[battleship.startingPostionX][battleship.startingPostionY] =
          'battleship';
        board[battleship.startingPostionX + 1][battleship.startingPostionY] =
          'battleship';
        board[battleship.startingPostionX + 2][battleship.startingPostionY] =
          'battleship';
        board[battleship.startingPostionX - 1][battleship.startingPostionY] =
          'battleship';
        stopGenerating = false;
      } else if (
        board[battleship.startingPostionX][battleship.startingPostionY] ===
          '' &&
        board[battleship.startingPostionX][battleship.startingPostionY + 1] ===
          '' &&
        board[battleship.startingPostionX][battleship.startingPostionY + 2] ===
          '' &&
        board[battleship.startingPostionX][battleship.startingPostionY - 1] ===
          ''
      ) {
        board[battleship.startingPostionX][battleship.startingPostionY] =
          'battleship';
        board[battleship.startingPostionX][battleship.startingPostionY + 1] =
          'battleship';
        board[battleship.startingPostionX][battleship.startingPostionY + 2] =
          'battleship';
        board[battleship.startingPostionX][battleship.startingPostionY - 1] =
          'battleship';
        stopGenerating = false;
      }
    }
  },
  registerCruiserInBoard(board) {
    let stopGenerating = true;
    while (stopGenerating) {
      const cruiser = this.generateRandomCoordinates(1, 8);
      if (
        cruiser.reversed &&
        board[cruiser.startingPostionX][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX + 1][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX - 1][cruiser.startingPostionY] === 's'
      ) {
        board[cruiser.startingPostionX][cruiser.startingPostionY] = 'cruiser';
        board[cruiser.startingPostionX + 1][cruiser.startingPostionY] =
          'cruiser';
        board[cruiser.startingPostionX - 1][cruiser.startingPostionY] =
          'cruiser';
        stopGenerating = false;
      } else if (
        board[cruiser.startingPostionX][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX][cruiser.startingPostionY + 1] === '' &&
        board[cruiser.startingPostionX][cruiser.startingPostionY - 1] === ''
      ) {
        board[cruiser.startingPostionX][cruiser.startingPostionY] = 'cruiser';
        board[cruiser.startingPostionX][cruiser.startingPostionY + 1] =
          'cruiser';
        board[cruiser.startingPostionX][cruiser.startingPostionY - 1] =
          'cruiser';
        stopGenerating = false;
      }
    }
  },
  registerSubmarineInBoard(board) {
    let stopGenerating = true;
    while (stopGenerating) {
      const submarine = this.generateRandomCoordinates(1, 8);
      if (
        submarine.reversed &&
        board[submarine.startingPostionX][submarine.startingPostionY] === '' &&
        board[submarine.startingPostionX + 1][submarine.startingPostionY] ===
          '' &&
        board[submarine.startingPostionX - 1][submarine.startingPostionY] === ''
      ) {
        board[submarine.startingPostionX][submarine.startingPostionY] =
          'submarine';
        board[submarine.startingPostionX + 1][submarine.startingPostionY] =
          'submarine';
        board[submarine.startingPostionX - 1][submarine.startingPostionY] =
          'submarine';
        stopGenerating = false;
      } else if (
        board[submarine.startingPostionX][submarine.startingPostionY] === '' &&
        board[submarine.startingPostionX][submarine.startingPostionY + 1] ===
          '' &&
        board[submarine.startingPostionX][submarine.startingPostionY - 1] === ''
      ) {
        board[submarine.startingPostionX][submarine.startingPostionY] =
          'submarine';
        board[submarine.startingPostionX][submarine.startingPostionY + 1] =
          'submarine';
        board[submarine.startingPostionX][submarine.startingPostionY - 1] =
          'submarine';
        stopGenerating = false;
      }
    }
  },
  registerSubmarineInBoard(board) {
    let stopGenerating = true;
    while (stopGenerating) {
      const cruiser = this.generateRandomCoordinates(1, 8);
      if (
        cruiser.reversed &&
        board[cruiser.startingPostionX][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX + 1][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX - 1][cruiser.startingPostionY] === ''
      ) {
        board[cruiser.startingPostionX][cruiser.startingPostionY] = 'submarine';
        board[cruiser.startingPostionX + 1][cruiser.startingPostionY] =
          'submarine';
        board[cruiser.startingPostionX - 1][cruiser.startingPostionY] =
          'submarine';
        stopGenerating = false;
      } else if (
        board[cruiser.startingPostionX][cruiser.startingPostionY] === '' &&
        board[cruiser.startingPostionX][cruiser.startingPostionY + 1] === '' &&
        board[cruiser.startingPostionX][cruiser.startingPostionY - 1] === ''
      ) {
        board[cruiser.startingPostionX][cruiser.startingPostionY] = 'submarine';
        board[cruiser.startingPostionX][cruiser.startingPostionY + 1] =
          'submarine';
        board[cruiser.startingPostionX][cruiser.startingPostionY - 1] =
          'submarine';
        stopGenerating = false;
      }
    }
  },
  registerDestroyerInBoard(board) {
    let stopGenerating = true;
    while (stopGenerating) {
      const destroyer = this.generateRandomCoordinates(0, 8);
      if (
        destroyer.reversed &&
        board[destroyer.startingPostionX][destroyer.startingPostionY] === '' &&
        board[destroyer.startingPostionX + 1][destroyer.startingPostionY] === ''
      ) {
        board[destroyer.startingPostionX][destroyer.startingPostionY] =
          'destroyer';
        board[destroyer.startingPostionX + 1][destroyer.startingPostionY] =
          'destroyer';
        stopGenerating = false;
      } else if (
        board[destroyer.startingPostionX][destroyer.startingPostionY] ===
          'ship' &&
        board[destroyer.startingPostionX][destroyer.startingPostionY + 1] ===
          'ship'
      ) {
        board[destroyer.startingPostionX][destroyer.startingPostionY] =
          'destroyer';
        board[destroyer.startingPostionX][destroyer.startingPostionY + 1] =
          'destroyer';
        stopGenerating = false;
      }
    }
  },
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};
