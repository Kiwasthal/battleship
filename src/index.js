import './style.css';
import createDisplay from './domFunctions';
import { renderGrid } from './renderGrid';
import animator from './animations';
import dragAndDropHandler from './dragAndDrop';

createDisplay();
renderGrid('player-grid');
renderGrid('computer-grid');
document
  .querySelector('.open-drawer')
  .addEventListener('click', animator.animateShelf);
dragAndDropHandler.addDragAndDropListeners(
  document.querySelector('.carrier'),
  document.querySelectorAll('.cell')
);
