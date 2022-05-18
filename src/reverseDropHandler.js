export default {
  handleReverse(active, e) {
    console.log(active);
    let attX = parseInt(e.target.getAttribute('data-row'));
    let attY = parseInt(e.target.getAttribute('data-column'));
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
    let nodesAround = [
      nodeBeforePrevious,
      nodePrevious,
      nodeNext,
      nodeAfterNext,
    ];
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
    this.handleReverseShipPlacement(active, e, nodesAround);
    document.querySelector('.reverseShip').classList.remove('scaleNormal');
  },
  handleReverseShipPlacement(active, e, nodesAround) {
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
    }
  },
};
