let createBattleShipHeader = container => {
  const battleShipHeader = document.createElement('h2');
  battleShipHeader.textContent = 'Battleship';
  battleShipHeader.classList.add('main-header');
  container.appendChild(battleShipHeader);
};

let createLetterLabels = (container, className) => {
  let letterContainer = document.createElement('div');
  for (let i = 65; i < 75; i++) {
    let index = document.createElement('p');
    index.classList.add('letter-index');
    index.textContent = String.fromCharCode(i);
    letterContainer.appendChild(index);
  }
  letterContainer.classList = className;
  container.appendChild(letterContainer);
};

let createLabels = container => {
  createLetterLabels(container, 'top-left-letter-index');
  createLetterLabels(container, 'bottom-left-letter-index');
};

export default () => {
  let container = document.querySelector('.container');
  createBattleShipHeader(container);
  createLabels(container);
};
