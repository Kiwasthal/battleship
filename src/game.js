import Player from './Player';
import createDisplay from './domFunctions';
import { renderGrid } from './renderGrid';
import animator from './animations';
import dragAndDropHandler from './dragAndDrop';
import createDragElements from './dragFactory';
import modalHandling from './modalHandling';

export default (() => {
  //Initialize DOM setup
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
    createDragElements();
    document.querySelector('.reverseShip').addEventListener('dragenter', () => {
      document.querySelector('.dragging').classList.toggle('reversed');
    });
  };
  onStartUp(); //Calling function to create Display

  //Run Game is run when the user click the start Button , run through the combining methods of the Player Object
  //And the Gameboard - ship object contained within
  let runGame = () => {
    let player1 = Player(true, false, 'captain');
    let player2 = Player(true, true, 'ai');
    document.querySelector('.startGame').classList.add('minify');
    player1.Gameboard.cataloguesShips();
    player1.Gameboard.fillsBoardWithShips();
    player2.generateShipPositions();
    player2.registerRandomShips();
    player1.attackBoard(player2.Gameboard, null);
    document.querySelectorAll('.computerTile').forEach(
      tile => {
        tile.addEventListener(
          'click',
          () => player1.attackBoard(player2.Gameboard, player1.Gameboard),
          { once: true }
        );
      },
      { once: true }
    );
    let reset = document.querySelector('.resetGame');
    reset.addEventListener('click', resetGame);
  };

  let resetGame = () => {
    const container = document.querySelector('.container');
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    onStartUp();
    modalHandling.closeModal();
    document.querySelector('.startGame').addEventListener('click', runGame);
  };
  //--------------------------------------------------------------------------

  document.querySelector('.startGame').addEventListener('click', runGame);
})();
