export default {
  mapActive(active, e) {
    let attX = parseInt(e.target.getAttribute('data-row'));
    let attY = parseInt(e.target.getAttribute('data-column'));
    if (active.classList.contains('reversed')) {
      let nodePrevious = document.querySelector(
        `[data-row="${attX - 1}"][data-column="${attY}"]`
      );
      let nodeBeforePrevious = document.querySelector(
        `[data-row="${attX - 2}"][data-column="${attY}"]`
      );
      let nodeNext = document.querySelector(
        `[data-row="${attX + 1}"][data-column="${attY}"]`
      );
      let nodeAfterNext = document.querySelector(
        `[data-row="${attX + 2}"][data-column="${attY}"]`
      );
      return [nodeBeforePrevious, nodePrevious, nodeNext, nodeAfterNext];
    } else {
      let nodePrevious = document.querySelector(
        `[data-row="${attX}"][data-column="${attY - 1}"]`
      );
      let nodeBeforePrevious = document.querySelector(
        `[data-row="${attX}"][data-column="${attY - 2}"]`
      );
      let nodeNext = document.querySelector(
        `[data-row="${attX}"][data-column="${attY + 1}"]`
      );
      let nodeAfterNext = document.querySelector(
        `[data-row="${attX}"][data-column="${attY + 2}"]`
      );
      return [nodeBeforePrevious, nodePrevious, nodeNext, nodeAfterNext];
    }
  },
  handleShip(active, e) {
    let nodesAround = this.mapActive(active, e);
    if (active.classList.contains('carrier'))
      if (!nodesAround.includes(null))
        nodesAround.map(node => node.classList.remove('over'));

    if (active.classList.contains('battleship')) {
      if (!nodesAround.slice(1, 4).includes(null));
      nodesAround.slice(1, 4).map(node => node.classList.remove('over'));
    }
    if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      if (!nodesAround.slice(1, 3).includes(null));
      nodesAround.slice(1, 3).map(node => node.classList.remove('over'));
    }
    if (active.classList.contains('destroyer')) {
      if (!nodesAround.slice(2, 3).includes(null));
      nodesAround.slice(2, 3).map(node => node.classList.remove('over'));
    }
    this.handleShipPlacement(active, e, nodesAround);
    document.querySelector('.reverseShip').classList.remove('scaleNormal');
  },

  checkIfAllShipsPlaced() {
    let carrier = document.querySelector('.carrier');
    let battleship = document.querySelector('.carrier');
    let cruiser = document.querySelector('.cruiser');
    let submarine = document.querySelector('.submarine');
    let destroyer = document.querySelector('.destroyer');
    if (
      carrier.style.display === 'none' &&
      battleship.style.display === 'none' &&
      submarine.style.display === 'none' &&
      cruiser.style.display === 'none' &&
      destroyer.style.display === 'none'
    ) {
      let button = document.querySelector('.startGame');
      button.classList.add('scaleNormal');
    }
  },
  handleShipPlacement(active, e, nodesAround) {
    let check = [];
    if (active.classList.contains('carrier')) {
      if (nodesAround.includes(null)) return;
      nodesAround.filter(node => {
        if (node.classList.contains('taken')) check.push(node);
      });
      if (e.target.classList.contains('taken') || check.length > 0) return;
      nodesAround.map(node => {
        node.style.background = 'yellow';
        node.classList.add('carrierPlaced', 'taken');
      });
      e.target.style.background = 'yellow';
      e.target.classList.add('carrierPlaced', 'taken');
      active.style.display = 'none';
    }
    if (active.classList.contains('battleship')) {
      if (nodesAround.slice(1, 4).includes(null)) return;
      nodesAround.slice(1, 4).filter(node => {
        if (node.classList.contains('taken')) check.push(node);
      });
      if (e.target.classList.contains('taken') || check.length > 0) return;
      nodesAround.slice(1, 4).map(node => {
        node.style.background = 'purple';
        node.classList.add('battleshipPlaced', 'taken');
      });
      e.target.style.background = 'purple';
      e.target.classList.add('battleshipPlaced', 'taken');
      active.style.display = 'none';
    }
    if (active.classList.contains('cruiser')) {
      if (nodesAround.slice(1, 3).includes(null)) return;
      nodesAround.slice(1, 3).filter(node => {
        if (node.classList.contains('taken')) check.push(node);
      });
      if (e.target.classList.contains('taken') || check.length > 0) return;
      nodesAround.slice(1, 3).map(node => {
        node.style.background = 'green';
        node.classList.add('cruiserPlaced', 'taken');
      });
      e.target.style.background = 'green';
      e.target.classList.add('cruiserPlaced', 'taken');
      active.style.display = 'none';
    }
    if (active.classList.contains('submarine')) {
      if (nodesAround.slice(1, 3).includes(null)) return;
      nodesAround.slice(1, 3).filter(node => {
        if (node.classList.contains('taken')) check.push(node);
      });
      if (e.target.classList.contains('taken') || check.length > 0) return;
      nodesAround.slice(1, 3).map(node => {
        node.style.background = 'blue';
        node.classList.add('submarinePlaced', 'taken');
      });
      e.target.style.background = 'blue';
      e.target.classList.add('submarinePlaced', 'taken');
      active.style.display = 'none';
    }
    if (active.classList.contains('destroyer')) {
      if (nodesAround.slice(2, 3).includes(null)) return;
      nodesAround.slice(2, 3).filter(node => {
        if (node.classList.contains('taken')) check.push(node);
      });
      if (e.target.classList.contains('taken') || check.length > 0) return;
      nodesAround.slice(2, 3).map(node => {
        node.style.background = 'pink';
        node.classList.add('destroyerPlaced', 'taken');
      });
      e.target.style.background = 'pink';
      e.target.classList.add('destroyerPlaced', 'taken');
      active.style.display = 'none';
    }
  },
  handleHoverAdd(active, e) {
    e.target.classList.add('over');
    let nodesAround = this.mapActive(active, e);
    if (active.classList.contains('carrier')) {
      if (nodesAround.includes(null)) return;
      nodesAround.map(node => node.classList.add('over'));
    }
    if (active.classList.contains('battleship')) {
      if (nodesAround.slice(1, 4).includes(null)) return;
      nodesAround.slice(1, 4).map(node => node.classList.add('over'));
    }
    if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      if (nodesAround.slice(1, 3).includes(null)) return;
      nodesAround.slice(1, 3).map(node => node.classList.add('over'));
    }
    if (active.classList.contains('destroyer')) {
      if (nodesAround.slice(2, 3).includes(null)) return;
      nodesAround.slice(2, 3).map(node => node.classList.add('over'));
    }
  },
  handleHoversRemove(active, e) {
    let nodesAround = this.mapActive(active, e);
    if (active.classList.contains('carrier')) {
      if (nodesAround.includes(null)) return;
      nodesAround.map(node => node.classList.remove('over'));
    }
    if (active.classList.contains('battleship')) {
      if (nodesAround.slice(1, 4).includes(null)) return;
      nodesAround.slice(1, 4).map(node => node.classList.remove('over'));
    }
    if (
      active.classList.contains('cruiser') ||
      active.classList.contains('submarine')
    ) {
      if (nodesAround.slice(1, 3).includes(null)) return;
      nodesAround.slice(1, 3).map(node => node.classList.remove('over'));
    }
    if (active.classList.contains('destroyer')) {
      if (nodesAround.slice(2, 3).includes(null)) return;
      nodesAround.slice(2, 3).map(node => node.classList.remove('over'));
    }
  },
};
