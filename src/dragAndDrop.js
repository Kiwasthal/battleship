import dropHandler from './eventDropHandler';
export default {
  handleDragStart(e) {
    e.target.classList.add('dragging');
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
    this.classList.add('over');
  },
  handleDragLeave(e) {
    this.classList.remove('over');
  },
  handleDrop(e) {
    e.preventDefault(e);
    let active = document.querySelector('.dragging');
    e.target.classList.remove('over');
    dropHandler.handleShipDrop(active, e);
    console.log(e.target);
  },
  addCellListeners(cells) {
    cells.forEach(cell => {
      cell.addEventListener('dragover', this.handleDragOver);
      cell.addEventListener('dragenter', this.handleDragEnter);
      cell.addEventListener('dragleave', this.handleDragLeave);
      cell.addEventListener('drop', this.handleDrop);
    });
  },
  addDragAndDropListeners(ships, cells) {
    ships.forEach(ship => {
      ship.addEventListener('dragstart', this.handleDragStart);
      ship.addEventListener('dragend', this.handleDragEnd);
    });
    this.addCellListeners(cells);
  },
};
