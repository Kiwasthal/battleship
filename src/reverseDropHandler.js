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
    this.handleReverseCarrier(active, e, nodesAround);

    document.querySelector('.reverseShip').classList.remove('scaleNormal');
  },
  handleReverseCarrier(active, e, nodesAround) {
    if (nodesAround.includes(null)) return;
    if (active.classList.contains('carrier')) {
      nodesAround.map(node => (node.style.background = 'red'));
      e.target.style.background = 'red';
    }
  },
};
