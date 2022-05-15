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
  shipContainer.appendChild(createCarrier());
  container.appendChild(shipContainer);
};

let createCarrier = parent => {
  let carrierContainer = document.createElement('div');
  carrierContainer.draggable = 'true';
  carrierContainer.classList.add('carrier');
  for (let i = 0; i < 5; i++) {
    let shipCell = document.createElement('div');
    shipCell.classList.add('ship-cell');
    carrierContainer.appendChild(shipCell);
  }
  return carrierContainer;
};

let createLabels = container => {
  createLetterLabels(container, 'top-left-letter-index');
  createLetterLabels(container, 'bottom-left-letter-index');
  createNumberLabels(container, 'top-number-index');
  createNumberLabels(container, 'bottom-number-index');
};

export default () => {
  let container = document.querySelector('.container');
  createBattleShipHeader(container);
  createLabels(container);
  createShipContainer(container);
};
