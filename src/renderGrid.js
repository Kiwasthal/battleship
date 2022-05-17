let renderGrid = classList => {
  let container = document.querySelector('.container');
  let createGridLeft = document.createElement('div');
  createGridLeft.classList.add(classList);
  container.appendChild(createGridLeft);
  for (let i = 0; i < 10; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    createGridLeft.appendChild(row);
    for (let y = 0; y < 10; y++) {
      let cell = document.createElement('div');
      cell.dataset.column = y;
      cell.dataset.row = i;
      cell.classList.add('cell');
      if (classList === 'player-grid') cell.classList.add('playerTile');
      if (classList === 'computer-grid') cell.classList.add('computerTile');
      row.appendChild(cell);
    }
  }
};

export { renderGrid };
