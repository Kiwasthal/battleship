import boardFactory from './boardFactory';
import shipPositionGenerator from './shipPositionGenerator';

const PlayerActions = {
  takeTurn() {},
  generateShipPositions() {
    shipPositionGenerator.registerCarrierInBoard(this.Player);
    shipPositionGenerator.registerBattleShipInBoard(this.Player);
  },
};

export default (isPlaying, isAi) => {
  let Player = Object.create(PlayerActions);
  Player.board = boardFactory();
  Player.isPlaying = isPlaying;
  Player.isAi = isAi;
};
