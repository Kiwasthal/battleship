import boardFactory from './boardFactory';
import shipPositionGenerator from './shipPositionGenerator';

const PlayerActions = {
  takeTurn() {},
  generateShipPositions() {
    shipPositionGenerator.registerCarrierInBoard(this.Player);
    shipPositionGenerator.registerBattleshipInBoard(this.Player);
    shipPositionGenerator.registerCruiserShipInBoard(this.Player);
    shipPositionGenerator.registerSubmarineInBoard(this.Player);
    shipPositionGenerator.registerDestroyerInBoard(this.Player);
  },
};

export default (isPlaying, isAi) => {
  let Player = Object.create(PlayerActions);
  Player.board = boardFactory();
  Player.isPlaying = isPlaying;
  Player.isAi = isAi;
};
