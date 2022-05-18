import dropHandler from './eventDropHandler';

export default {
  handleDragStart(e) {
    e.target.classList.add('dragging');
    document.querySelector('.reverseShip').classList.add('scaleNormal');
  },
  handleDragEnd(e) {
    this.style.opacity = '1';
    e.target.classList.remove('dragging');
  },
  handleDragOver(e) {
    e.preventDefault();
    return false;
  },
  handleDragEnter(e) {
    let active = document.querySelector('.dragging');
    dropHandler.handleHoverAdd(active, e);
    e.target.classList.add('hover');
  },
  handleDragLeave(e) {
    let active = document.querySelector('.dragging');
    dropHandler.handleHoversRemove(active, e);
    e.target.classList.remove('over');
  },
  handleDrop(e) {
    e.preventDefault(e);
    let active = document.querySelector('.dragging');
    dropHandler.handleShip(active, e);
    e.target.classList.remove('over');
    dropHandler.checkIfAllShipsPlaced();
    document.querySelector('.reverseShip').classList.remove('scaleNormal');
  },
  addCellListeners(cells) {
    cells.forEach(cell => {
      cell.addEventListener('dragover', this.handleDragOver);
      cell.addEventListener('dragleave', this.handleDragLeave);
      cell.addEventListener('dragenter', this.handleDragEnter);
      cell.addEventListener('drop', this.handleDrop);
    });
  },
  addDragAndDropListeners(ships, cells) {
    ships.forEach(ship => {
      ship.addEventListener('dragstart', this.handleDragStart, false);
      ship.addEventListener('dragend', this.handleDragEnd);
    });
    this.addCellListeners(cells);
  },
};
