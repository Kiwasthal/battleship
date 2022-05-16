export default {
  generateRandomCoordinates(min, max) {
    let oneOrZero = Math.random() > 0.5 ? 1 : 0;
    if (oneOrZero === 0) {
      let startingPostionY = this.randomIntFromInterval(min, max);
      let startingPostionX = this.randomIntFromInterval(min, max);
      return { startingPostionX, startingPostionY, reversed: false };
    } else if (oneOrZero === 1) {
      let startingPostionY = this.randomIntFromInterval(min, max);
      let startingPostionX = this.randomIntFromInterval(min, max);
      return { startingPostionX, startingPostionY, reversed: true };
    }
  },
  registerCarrierInBoard(aiPlayer) {
    let carrier = this.generateRandomCoordinates(2, 7);
    if (carrier.reversed) {
      aiPlayer.board[carrier.startingPostionX][carrier.startingPostionY] =
        'ship';
      aiPlayer.board[carrier.startingPostionX + 1][carrier.startingPostionY] =
        'ship';
      aiPlayer.board[carrier.startingPostionX + 2][carrier.startingPostionY] =
        'ship';
      aiPlayer.board[carrier.startingPostionX - 1][carrier.startingPostionY] =
        'ship';
      aiPlayer.board[carrier.startingPostionX - 2][carrier.startingPostionY] =
        'ship';
    } else {
      aiPlayer.board[carrier.startingPostionX][carrier.startingPostionY] =
        'ship';
      aiPlayer.board[carrier.startingPostionX][carrier.startingPostionY + 1] =
        'ship';
      aiPlayerboard[carrier.startingPostionX][carrier.startingPostionY + 2] =
        'ship';
      aiPlayer.board[carrier.startingPostionX][carrier.startingPostionY - 1] =
        'ship';
      aiPlayer.board[carrier.startingPostionX][carrier.startingPostionY - 2] =
        'ship';
    }
  },
  registerBattleShipInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let battleship = this.generateRandomCoordinates(1, 8);
      if (
        battleship.reversed &&
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX + 1][
          battleship.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX - 1][
          battleship.startingPostionY
        ] !== 'ship'
      ) {
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY
        ] = 'ship';
        aiPlayer.board[battleship.startingPostionX + 1][
          battleship.startingPostionY
        ] = 'ship';
        aiPlayer.board[battleship.startingPostionX - 1][
          battleship.startingPostionY
        ] = 'ship';
        stopGenerating = false;
      }
    }
  },

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};
