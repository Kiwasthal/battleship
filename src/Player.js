import boardFactory from './boardFactory';
import shipPositionGenerator from './shipPositionGenerator';
import randomShipGenerator from './createShipsFromRandomBoard';

const PlayerActions = {
  attackBoard(board) {
    let attackTiles = document.querySelectorAll('.computerTile');
    attackTiles.forEach(tile =>
      tile.addEventListener('click', e => {
        let tile = e.target;
        board.receivesHit(
          [parseInt(e.target.dataset.row), parseInt(e.target.dataset.column)],
          tile
        );
        if (board.areAllShipsDestroyed()) {
          console.log('you won');
        }
      })
    );
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
