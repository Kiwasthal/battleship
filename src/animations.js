export default {
  animateShelf() {
    document.querySelector('.open-drawer').classList.toggle('slide-open');
    document.querySelector('.shelf').classList.toggle('shelf-slide-open');
  },
  animateHitTile(tile) {
    setTimeout(() => tile.classList.add('registerHit'), 1);
    setTimeout(() => tile.classList.add('hit'), 701);
  },
  animateMissTile(tile) {
    setTimeout(() => tile.classList.add('empty'), 1);
    setTimeout(() => tile.classList.add('relax'), 750);
  },
};
