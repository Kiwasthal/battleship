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
    let active = document.querySelector('.dragging');
    e.target.classList.remove('over');
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
      active.style.display = 'none';
    }
  },
  addCellListeners(cells) {
    cells.forEach(cell => {
      cell.addEventListener('dragover', this.handleDragOver);
      cell.addEventListener('dragenter', this.handleDragEnter);
      cell.addEventListener('dragleave', this.handleDragLeave);
      cell.addEventListener('drop', this.handleDrop);
    });
  },
  addDragAndDropListeners(carrier, cells) {
    carrier.addEventListener('dragstart', this.handleDragStart);
    carrier.addEventListener('dragend', this.handleDragEnd);
    this.addCellListeners(cells);
  },
};
