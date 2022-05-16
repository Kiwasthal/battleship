import boardFactory from './boardFactory';

const PlayerActions = {
  takeTurn() {},
};

export default (isPlaying, isAi) => {
  let Player = Object.create(PlayerActions);
  Player.board = boardFactory();
  Player.isPlaying = isPlaying;
  Player.isAi = isAi;
};
