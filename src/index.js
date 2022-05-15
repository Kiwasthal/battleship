import './style.css';
import creteDisplay from './domFunctions';
import { renderGrid } from './renderGrid';

creteDisplay();
renderGrid('player-grid');
renderGrid('computer-grid');
document.querySelector('.open-drawer').addEventListener('click', () => {
  if (document.querySelector('.open-drawer').classList.contains('slide-open')) {
    document.querySelector('.open-drawer').classList.remove('slide-open');
    document.querySelector('.shelf').classList.remove('shelf-slide-open');
  } else {
    document.querySelector('.open-drawer').classList.add('slide-open');
    document.querySelector('.shelf').classList.add('shelf-slide-open');
  }
});

let carrier = document.querySelector('.carrier');
let cells = document.querySelectorAll('.cell');

carrier.addEventListener('dragstart', handleDragStart);
carrier.addEventListener('dragend', handleDragEnd);

function handleDragStart(e) {
  let dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  return dragSrcEl;
}

function handleDragEnd(e) {
  this.style.opacity = '1';
}

function handleDragOver(e) {
  e.preventDefault();
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (
    e.target.nextSibling.nextSibling &&
    e.target.previousSibling.previousSibling
  ) {
    e.target.classList.add('ship');
    e.target.style.backgroundColor = 'red';
    e.target.previousSibling.style.backgroundColor = 'red';
    e.target.previousSibling.previousSibling.style.backgroundColor = 'red';
    e.target.nextSibling.style.backgroundColor = 'red';
    e.target.nextSibling.nextSibling.style.backgroundColor = 'red';
  }
}

cells.forEach(cell => {
  cell.addEventListener('dragover', handleDragOver);
  cell.addEventListener('dragenter', handleDragEnter);
  cell.addEventListener('dragleave', handleDragLeave);
  cell.addEventListener('drop', handleDrop);
});
