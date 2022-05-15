export default {
  handleDragStart(e) {
    let dragged = e.target;
    return dragged;
  },
  handleDragEnd(e) {
    this.style.opacity = '1';
  },
  handleDragOver(e) {
    e.preventDefault();
    console.log('hey');
    return false;
  },
  handleDragEnter(e) {
    this.classList.add('over');
  },
  handleDragLeave(e) {
    this.classList.remove('over');
  },
  handleDrop(e) {
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
      carrier.style.display = 'none';
    }
  },
  addCellListeners(cells) {
    cells.forEach(cell => {
      cell.addEventListener('dragover', this.handleDragOver);
      cell.addEventListener('dragenter', this.handleDragEnter);
      cell.addEventListener('dragleave', this.handleDragLeave);
      cell.addEventListener('drop', this.handleDrop);
      console.log(cell);
    });
  },
  addDragAndDropListeners(carrier, cells) {
    carrier.addEventListener('dragstart', this.handleDragStart);
    carrier.addEventListener('dragend', this.handleDragEnd);
    this.addCellListeners(cells);
  },
};
