let createBattleShipHeader = container => {
  const battleShipHeader = document.createElement('h2');
  battleShipHeader.textContent = 'Battleship';
  battleShipHeader.classList.add('main-header');
  container.appendChild(battleShipHeader);
};

let createLetterLabels = (container, className) => {
  let lettersContainer = document.createElement('div');
  for (let i = 65; i < 75; i++) {
    let index = document.createElement('p');
    index.classList.add('letter-index');
    index.textContent = String.fromCharCode(i);
    lettersContainer.appendChild(index);
  }
  lettersContainer.classList = className;
  container.appendChild(lettersContainer);
};

let createNumberLabels = (container, className) => {
  let numbersContainer = document.createElement('div');
  for (let i = 1; i <= 10; i++) {
    let index = document.createElement('p');
    index.classList.add('number-index');
    index.textContent = `${i}`;
    numbersContainer.appendChild(index);
  }
  numbersContainer.classList.add(className);
  container.appendChild(numbersContainer);
};

let createShipContainer = container => {
  let openDrawer = document.createElement('div');
  openDrawer.classList.add('open-drawer');
  container.appendChild(openDrawer);
  let shipContainer = document.createElement('div');
  shipContainer.classList.add('shelf');
  shipContainer.appendChild(createDraggedShips(5, 'carrier'));
  shipContainer.appendChild(createDraggedShips(4, 'battleship'));
  shipContainer.appendChild(createDraggedShips(3, 'cruiser'));
  shipContainer.appendChild(createDraggedShips(3, 'submarine'));
  shipContainer.appendChild(createDraggedShips(2, 'destroyer'));
  container.appendChild(shipContainer);
};

let createDraggedShips = (length, className) => {
  let shipContainer = document.createElement('div');
  shipContainer.draggable = 'true';
  shipContainer.classList.add(className);
  shipContainer.classList.add('ships');
  for (let i = 0; i < length; i++) {
    let shipCell = document.createElement('div');
    shipCell.classList.add('ship-cell');
    shipContainer.appendChild(shipCell);
  }
  return shipContainer;
};

let createLabels = container => {
  createLetterLabels(container, 'top-left-letter-index');
  createLetterLabels(container, 'bottom-left-letter-index');
  createNumberLabels(container, 'top-number-index');
  createNumberLabels(container, 'bottom-number-index');
};

let createButton = container => {
  let button = document.createElement('button');
  button.classList.add('startGame');
  button.textContent = 'Start';
  container.appendChild(button);
};

export default () => {
  let container = document.querySelector('.container');
  createBattleShipHeader(container);
  createLabels(container);
  createShipContainer(container);
  createButton(container);
};
