export default {
  startAttack() {
    board.receivesHit(
      [parseInt(this.dataset.row), parseInt(this.dataset.column)],
      this
    );
    if (board.areAllShipsDestroyed()) console.log('You Won');
  },
};
