import './style.css';
import createDisplay from './domFunctions';
import { renderGrid } from './renderGrid';
import animator from './animations';
import dragAndDropHandler from './dragAndDrop';
import Player from './Player';

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

let player1 = Player(true, false, 'panos');
console.log(player1);

let button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'play';
button.addEventListener('click', () => {
  player1.Gameboard.cataloguesShips();
  player1.Gameboard.fillsBoardWithShips();
  player1.Gameboard.receivesHit([3, 0]);
  player1.Gameboard.receivesHit([3, 1]);
  player1.Gameboard.receivesHit([3, 2]);
  player1.Gameboard.receivesHit([3, 3]);
  player1.Gameboard.receivesHit([3, 4]);
  console.log(player1.Gameboard);
});
