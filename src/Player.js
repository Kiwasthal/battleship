import boardFactory from './boardFactory';
import shipPositionGenerator from './shipPositionGenerator';

const PlayerActions = {
  takeTurn() {},
  generateShipPositions() {
    shipPositionGenerator.registerCarrierInBoard(this.Gameboard.board);
    shipPositionGenerator.registerBattleshipInBoard(this.Gameboard.board);
    shipPositionGenerator.registerCruiserInBoard(this.Gameboard.board);
    shipPositionGenerator.registerSubmarineInBoard(this.Gameboard.board);
    shipPositionGenerator.registerDestroyerInBoard(this.Gameboard.board);
  },
  getShipCoordinatesFromDom() {},
};

export default (isPlaying, isAi, name) => {
  let Player = Object.create(PlayerActions);
  Player.Gameboard = boardFactory();
  Player.isPlaying = isPlaying;
  Player.isAi = isAi;
  Player.name = name;
  return Player;
};
