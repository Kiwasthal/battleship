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
player1.generateShipPositions();
console.log(player1);
