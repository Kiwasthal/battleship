const createBattleShipHeader = container => {
  const battleShipHeader = document.createElement('h2');
  battleShipHeader.textContent = 'Battleship';
  battleShipHeader.classList.add('main-header');
  container.appendChild(battleShipHeader);
};

const createLetterLabels = (container, className) => {
  const lettersContainer = document.createElement('div');
  for (let i = 65; i < 75; i += 1) {
    const index = document.createElement('p');
    index.classList.add('letter-index');
    index.textContent = String.fromCharCode(i);
    lettersContainer.appendChild(index);
  }
  lettersContainer.classList = className;
  container.appendChild(lettersContainer);
};

const createNumberLabels = (container, className) => {
  const numbersContainer = document.createElement('div');
  for (let i = 1; i <= 10; i += 1) {
    const index = document.createElement('p');
    index.classList.add('number-index');
    index.textContent = `${i}`;
    numbersContainer.appendChild(index);
  }
  numbersContainer.classList.add(className);
  container.appendChild(numbersContainer);
};

const createDraggedShips = (length, className) => {
  const shipContainer = document.createElement('div');
  const inner = document.createElement('div');
  inner.classList.add('inner');
  shipContainer.appendChild(inner);
  shipContainer.draggable = 'true';
  shipContainer.classList.add(className);
  shipContainer.classList.add('ships');
  for (let i = 0; i < length; i++) {
    const shipCell = document.createElement('div');
    shipCell.classList.add('ship-cell');
    shipContainer.appendChild(shipCell);
  }
  return shipContainer;
};

const createShipContainer = container => {
  const openDrawer = document.createElement('div');
  openDrawer.classList.add('open-drawer');
  container.appendChild(openDrawer);
  const shipContainer = document.createElement('div');
  shipContainer.classList.add('shelf');
  shipContainer.appendChild(createDraggedShips(5, 'carrier'));
  shipContainer.appendChild(createDraggedShips(4, 'battleship'));
  shipContainer.appendChild(createDraggedShips(3, 'cruiser'));
  shipContainer.appendChild(createDraggedShips(3, 'submarine'));
  shipContainer.appendChild(createDraggedShips(2, 'destroyer'));
  container.appendChild(shipContainer);
};

const createLabels = container => {
  createLetterLabels(container, 'top-left-letter-index');
  createLetterLabels(container, 'bottom-left-letter-index');
  createNumberLabels(container, 'top-number-index');
  createNumberLabels(container, 'bottom-number-index');
};

const createButton = container => {
  const button = document.createElement('button');
  button.classList.add('startGame');
  button.textContent = 'Start';
  container.appendChild(button);
};

const createReverseButton = container => {
  const reverseButton = document.createElement('button');
  reverseButton.classList.add('reverseShip');
  reverseButton.textContent = 'REVERSE';
  container.appendChild(reverseButton);
};

export default () => {
  const container = document.querySelector('.container');
  createBattleShipHeader(container);
  createLabels(container);
  createShipContainer(container);
  createButton(container);
  createReverseButton(container);
};
