import Player from './Player';
import createDisplay from './domFunctions';
import { renderGrid } from './renderGrid';
import animator from './animations';
import dragAndDropHandler from './dragAndDrop';

export default (() => {
  const onStartUp = () => {
    createDisplay();
    renderGrid('player-grid');
    renderGrid('computer-grid');
    document
      .querySelector('.open-drawer')
      .addEventListener('click', animator.animateShelf);
    dragAndDropHandler.addDragAndDropListeners(
      document.querySelectorAll('.ships'),
      document.querySelectorAll('.playerTile')
    );
  };

  onStartUp();
  let player1 = Player(true, false, 'captain');
  let player2 = Player(true, false, 'ai');

  document.querySelector('.startGame').addEventListener(
    'click',
    e => {
      document.querySelector('.startGame').classList.add('minify');
      player1.Gameboard.cataloguesShips();
      player1.Gameboard.fillsBoardWithShips();
      player2.generateShipPositions();
      player2.registerRandomShips();
      player1.attackBoard(player2.Gameboard, null);
      document.querySelectorAll('.computerTile').forEach(tile => {
        tile.addEventListener(
          'click',
          () => {
            player1.attackBoard(player2.Gameboard, player1.Gameboard);
          },
          { once: true }
        );
      });
    },
    { once: true }
  );
})();
