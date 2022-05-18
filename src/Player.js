import boardFactory from './boardFactory';
import shipPositionGenerator from './shipPositionGenerator';
import randomShipGenerator from './createShipsFromRandomBoard';

const PlayerActions = {
  attackBoard(board, otherBoard) {
    let attackTiles = document.querySelectorAll('.computerTile');
    attackTiles.forEach(tile =>
      tile.addEventListener(
        'click',
        function () {
          board.receivesHit(
            [parseInt(this.dataset.row), parseInt(this.dataset.column)],
            this
          );
        },
        { once: true },
        this
      )
    );
    if (board.areAllShipsDestroyed()) alert('You Win');
    if (otherBoard == null) return;
    this.aiAttackBoard(otherBoard);
    if (otherBoard.areAllShipsDestroyed()) alert('You lost');
  },
  aiAttackBoard(Gameboard) {
    let attackTiles = document.querySelectorAll('.playerTile');
    let attackX;
    let attackY;
    let attackNode = '';
    do {
      attackX = Math.floor(Math.random() * 10);
      attackY = Math.floor(Math.random() * 10);
    } while (
      Gameboard.board[attackX][attackY] == 'miss' ||
      Gameboard.board[attackX][attackY] == 'X'
    );
    attackTiles.forEach(tile => {
      if (tile.dataset.row == attackX && tile.dataset.column == attackY)
        attackNode = tile;
    });
    Gameboard.receivesHit([attackX, attackY], attackNode);
    console.log(Gameboard);
  },
  generateShipPositions() {
    shipPositionGenerator.registerCarrierInBoard(this.Gameboard.board);
    shipPositionGenerator.registerBattleshipInBoard(this.Gameboard.board);
    shipPositionGenerator.registerCruiserInBoard(this.Gameboard.board);
    shipPositionGenerator.registerSubmarineInBoard(this.Gameboard.board);
    shipPositionGenerator.registerDestroyerInBoard(this.Gameboard.board);
  },
  registerRandomShips() {
    this.Gameboard.shipLibrary = randomShipGenerator.registerRandomShips(
      this.Gameboard.board
    );
  },
  togglePlaying() {
    this.isPlaying ? (this.isPlaying = false) : (this.isPlaying = true);
  },
};
export default (isPlaying, isAi, name) => {
  let Player = Object.create(PlayerActions);
  Player.Gameboard = boardFactory();
  Player.isPlaying = isPlaying;
  Player.isAi = isAi;
  Player.name = name;
  return Player;
};
