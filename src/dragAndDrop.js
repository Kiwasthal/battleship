import dropHandler from './eventDropHandler';
import reverseDropHandler from './reverseDropHandler';

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
    if (active.classList.contains('carrier')) {
      if (
        this.nextSibling != null &&
        this.nextSibling.nextSibling != null &&
        this.previousSibling != null &&
        this.previousSibling.previousSibling != null
      ) {
        this.classList.add('over');
        this.nextSibling.classList.add('over');
        this.nextSibling.nextSibling.classList.add('over');
        this.previousSibling.classList.add('over');
        this.previousSibling.previousSibling.classList.add('over');
      }
    } else if (active.classList.contains('battleship')) {
      if (
        this.nextSibling != null &&
        this.nextSibling.nextSibling != null &&
        this.previousSibling != null
      ) {
        this.classList.add('over');
        this.nextSibling.classList.add('over');
        this.nextSibling.nextSibling.classList.add('over');
        this.previousSibling.classList.add('over');
      }
    } else if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      if (this.nextSibling != null && this.previousSibling != null) {
        this.classList.add('over');
        this.nextSibling.classList.add('over');
        this.previousSibling.classList.add('over');
      }
    } else if (active.classList.contains('destroyer')) {
      if (this.nextSibling != null) {
        this.classList.add('over');
        this.nextSibling.classList.add('over');
      }
    }
  },
  handleDragLeave(e) {
    let active = document.querySelector('.dragging');
    if (active.classList.contains('carrier')) {
      if (
        this.nextSibling != null &&
        this.nextSibling.nextSibling != null &&
        this.previousSibling != null &&
        this.previousSibling.previousSibling != null
      ) {
        this.classList.remove('over');
        this.nextSibling.classList.remove('over');
        this.nextSibling.nextSibling.classList.remove('over');
        this.previousSibling.classList.remove('over');
        this.previousSibling.previousSibling.classList.remove('over');
      }
    } else if (active.classList.contains('battleship')) {
      if (
        this.nextSibling != null &&
        this.nextSibling.nextSibling != null &&
        this.previousSibling != null
      ) {
        this.classList.remove('over');
        this.nextSibling.classList.remove('over');
        this.nextSibling.nextSibling.classList.remove('over');
        this.previousSibling.classList.remove('over');
      }
    } else if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      if (this.nextSibling != null && this.previousSibling != null) {
        this.classList.remove('over');
        this.nextSibling.classList.remove('over');
        this.previousSibling.classList.remove('over');
      }
    } else if (active.classList.contains('destroyer')) {
      if (this.nextSibling != null) {
        this.classList.remove('over');
        this.nextSibling.classList.remove('over');
      }
    }
  },
  handleDrop(e) {
    e.preventDefault(e);
    let active = document.querySelector('.dragging');
    active.style.display = 'none';
    if (active.classList.contains('reversed')) {
      reverseDropHandler.handleReverse(active, e);
    } else {
      if (active.classList.contains('carrier')) {
        if (
          e.target.nextSibling != null &&
          e.target.nextSibling.nextSibling != null &&
          e.target.previousSibling != null &&
          e.target.previousSibling.previousSibling != null
        ) {
          e.target.classList.remove('over');
          e.target.nextSibling.classList.remove('over');
          e.target.nextSibling.nextSibling.classList.remove('over');
          e.target.previousSibling.classList.remove('over');
          e.target.previousSibling.previousSibling.classList.remove('over');
        }
      } else if (active.classList.contains('battleship')) {
        if (
          e.target.nextSibling != null &&
          e.target.nextSibling.nextSibling != null &&
          e.target.previousSibling != null
        ) {
          e.target.classList.remove('over');
          e.target.nextSibling.classList.remove('over');
          e.target.nextSibling.nextSibling.classList.remove('over');
          e.target.previousSibling.classList.remove('over');
        }
      } else if (
        active.classList.contains('cruiser') ||
        active.classList.contains('submarine')
      ) {
        if (e.target.nextSibling != null && e.target.previousSibling != null) {
          e.target.classList.remove('over');
          e.target.nextSibling.classList.remove('over');
          e.target.previousSibling.classList.remove('over');
        }
      } else if (active.classList.contains('destroyer')) {
        if (e.target.nextSibling != null) {
          e.target.classList.remove('over');
          e.target.nextSibling.classList.remove('over');
        }
      }
      dropHandler.handleShipDrop(active, e);
      document.querySelector('.reverseShip').classList.remove('scaleNormal');
    }
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
