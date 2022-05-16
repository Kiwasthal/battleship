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
    let active = document.querySelector('.dragging');
    if (active.classList.contains('carrier')) {
      this.classList.add('over');
      this.nextSibling.classList.add('over');
      this.nextSibling.nextSibling.classList.add('over');
      this.previousSibling.classList.add('over');
      this.previousSibling.previousSibling.classList.add('over');
    } else if (active.classList.contains('battleship')) {
      this.classList.add('over');
      this.nextSibling.classList.add('over');
      this.nextSibling.nextSibling.classList.add('over');
      this.previousSibling.classList.add('over');
    } else if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      this.classList.add('over');
      this.nextSibling.classList.add('over');
      this.previousSibling.classList.add('over');
    } else if (active.classList.contains('destroyer')) {
      this.classList.add('over');
      this.nextSibling.classList.add('over');
    }
  },
  handleDragLeave(e) {
    let active = document.querySelector('.dragging');
    if (active.classList.contains('carrier')) {
      this.classList.remove('over');
      this.nextSibling.classList.remove('over');
      this.nextSibling.nextSibling.classList.remove('over');
      this.previousSibling.classList.remove('over');
      this.previousSibling.previousSibling.classList.remove('over');
    } else if (active.classList.contains('battleship')) {
      this.classList.remove('over');
      this.nextSibling.classList.remove('over');
      this.nextSibling.nextSibling.classList.remove('over');
      this.previousSibling.classList.remove('over');
    } else if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      this.classList.remove('over');
      this.nextSibling.classList.remove('over');
      this.previousSibling.classList.remove('over');
    } else if (active.classList.contains('destroyer')) {
      this.classList.remove('over');
      this.nextSibling.classList.remove('over');
    }
  },
  handleDrop(e) {
    e.preventDefault(e);
    let active = document.querySelector('.dragging');
    if (active.classList.contains('carrier')) {
      e.target.classList.remove('over');
      e.target.nextSibling.classList.remove('over');
      e.target.nextSibling.nextSibling.classList.remove('over');
      e.target.previousSibling.classList.remove('over');
      e.target.previousSibling.previousSibling.classList.remove('over');
    } else if (active.classList.contains('battleship')) {
      e.target.classList.remove('over');
      e.target.nextSibling.classList.remove('over');
      e.target.nextSibling.nextSibling.classList.remove('over');
      e.target.previousSibling.classList.remove('over');
    } else if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      e.target.classList.remove('over');
      e.target.nextSibling.classList.remove('over');
      e.target.previousSibling.classList.remove('over');
    } else if (active.classList.contains('destroyer')) {
      e.target.classList.remove('over');
      e.target.nextSibling.classList.remove('over');
    }
    dropHandler.handleShipDrop(active, e);
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
      ship.addEventListener('dragstart', this.handleDragStart);
      ship.addEventListener('dragend', this.handleDragEnd);
    });
    this.addCellListeners(cells);
  },
};
