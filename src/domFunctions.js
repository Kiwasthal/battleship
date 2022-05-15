let createBattleShipHeader = container => {
  const battleShipHeader = document.createElement('h2');
  battleShipHeader.textContent = 'Battleship';
  battleShipHeader.classList.add('main-header');
  container.appendChild(battleShipHeader);
};

export default () => {
  let container = document.querySelector('.container');
  createBattleShipHeader(container);
};
