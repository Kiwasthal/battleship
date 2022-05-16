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
  registerBattleshipInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let battleship = this.generateRandomCoordinates(1, 7);
      if (
        battleship.reversed &&
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX + 1][
          battleship.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX + 2][
          battleship.startingPostionY
        ] &&
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
      } else if (
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY + 1
        ] !== 'ship' &&
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY - 1
        ] !== 'ship'
      ) {
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY
        ] = 'ship';
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY + 1
        ] = 'ship';
        aiPlayer.board[battleship.startingPostionX][
          battleship.startingPostionY - 1
        ] = 'ship';
        stopGenerating = false;
      }
    }
  },
  registerCruiserShipInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let cruiser = this.generateRandomCoordinates(1, 8);
      if (
        cruiser.reversed &&
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] !==
          'ship' &&
        aiPlayer.board[cruiser.startingPostionX + 1][
          cruiser.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[cruiser.startingPostionX - 1][
          cruiser.startingPostionY
        ] !== 'ship'
      ) {
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX + 1][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX - 1][cruiser.startingPostionY] =
          'ship';
        stopGenerating = false;
      } else if (
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] !==
          'ship' &&
        aiPlayer.board[cruiser.startingPostionX][
          cruiser.startingPostionY + 1
        ] !== 'ship' &&
        aiPlayer.board[cruiser.startingPostionX][
          cruiser.startingPostionY - 1
        ] !== 'ship'
      ) {
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY + 1] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY - 1] =
          'ship';
        stopGenerating = false;
      }
    }
  },
  registerSubmarineInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let submarine = this.generateRandomCoordinates(1, 8);
      if (
        submarine.reversed &&
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[submarine.startingPostionX + 1][
          submarine.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[submarine.startingPostionX - 1][
          submarine.startingPostionY
        ] !== 'ship'
      ) {
        aiPlayer.board[submarine.startingPostionX][submarine.startingPostionY] =
          'ship';
        aiPlayer.board[submarine.startingPostionX + 1][
          submarine.startingPostionY
        ] = 'ship';
        aiPlayer.board[submarine.startingPostionX - 1][
          submarine.startingPostionY
        ] = 'ship';
        stopGenerating = false;
      } else if (
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY + 1
        ] !== 'ship' &&
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY - 1
        ] !== 'ship'
      ) {
        aiPlayer.board[submarine.startingPostionX][submarine.startingPostionY] =
          'ship';
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY + 1
        ] = 'ship';
        aiPlayer.board[submarine.startingPostionX][
          submarine.startingPostionY - 1
        ] = 'ship';
        stopGenerating = false;
      }
    }
  },
  registerDestroyerInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let cruiser = this.generateRandomCoordinates(1, 8);
      if (
        cruiser.reversed &&
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] !==
          'ship' &&
        aiPlayer.board[cruiser.startingPostionX + 1][
          cruiser.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[cruiser.startingPostionX - 1][
          cruiser.startingPostionY
        ] !== 'ship'
      ) {
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX + 1][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX - 1][cruiser.startingPostionY] =
          'ship';
        stopGenerating = false;
      } else if (
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] !==
          'ship' &&
        aiPlayer.board[cruiser.startingPostionX][
          cruiser.startingPostionY + 1
        ] !== 'ship' &&
        aiPlayer.board[cruiser.startingPostionX][
          cruiser.startingPostionY - 1
        ] !== 'ship'
      ) {
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY + 1] =
          'ship';
        aiPlayer.board[cruiser.startingPostionX][cruiser.startingPostionY - 1] =
          'ship';
        stopGenerating = false;
      }
    }
  },
  registerSubmarineInBoard(aiPlayer) {
    let stopGenerating = true;
    while (stopGenerating) {
      let destroyer = this.generateRandomCoordinates(0, 8);
      if (
        destroyer.reversed &&
        aiPlayer.board[destroyer.startingPostionX][
          destroyer.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[destroyer.startingPostionX + 1][
          destroyer.startingPostionY
        ] !== 'ship'
      ) {
        aiPlayer.board[destroyer.startingPostionX][destroyer.startingPostionY] =
          'ship';
        aiPlayer.board[destroyer.startingPostionX + 1][
          destroyer.startingPostionY
        ] = 'ship';
        stopGenerating = false;
      } else if (
        aiPlayer.board[destroyer.startingPostionX][
          destroyer.startingPostionY
        ] !== 'ship' &&
        aiPlayer.board[destroyer.startingPostionX][
          destroyer.startingPostionY + 1
        ] !== 'ship'
      ) {
        aiPlayer.board[destroyer.startingPostionX][destroyer.startingPostionY] =
          'ship';
        aiPlayer.board[destroyer.startingPostionX][
          destroyer.startingPostionY + 1
        ] = 'ship';
        stopGenerating = false;
      }
    }
  },
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};
