export default {
  handleShipDrop(active, e) {
    this.handleCarrier(active, e);
    this.handleBattleship(active, e);
    this.handleCruiser(active, e);
    this.handleSubmarine(active, e);
    this.handleDestroyer(active, e);
  },
  handleCarrier(active, e) {
    if (
      e.target.nextSibling == null ||
      e.target.previousSibling == null ||
      e.target.nextSibling.nextSibling == null ||
      e.target.previousSibling.previousSibling == null
    )
      return;
    if (
      e.target.classList.contains('taken') ||
      e.target.previousSibling.classList.contains('taken') ||
      e.target.previousSibling.previousSibling.classList.contains('taken') ||
      e.target.nextSibling.nextSibling.classList.contains('taken') ||
      e.target.nextSibling.classList.contains('taken')
    )
      return;
    if (active.classList.contains('carrier'))
      this.placeCarrier(e.target, active);
  },
  handleBattleship(active, e) {
    if (
      e.target.nextSibling == null ||
      e.target.nextSibling.nextSibling == null ||
      e.target.previousSibling == null
    )
      return;
    if (
      e.target.classList.contains('taken') ||
      e.target.nextSibling.nextSibling.classList.contains('taken') ||
      e.target.nextSibling.classList.contains('taken') ||
      e.target.previousSibling.classList.contains('taken')
    )
      return;
    if (active.classList.contains('battleship'))
      this.placeBattleship(e.target, active);
  },
  handleCruiser(active, e) {
    if (e.target.nextSibling == null || e.target.previousSibling == null)
      return;
    if (
      e.target.classList.contains('taken') ||
      e.target.nextSibling.classList.contains('taken') ||
      e.target.previousSibling.classList.contains('taken')
    )
      return;
    if (active.classList.contains('cruiser'))
      this.placeCruiser(e.target, active);
  },
  handleSubmarine(active, e) {
    if (e.target.nextSibling == null || e.target.previousSibling == null)
      return;
    if (
      e.target.classList.contains('taken') ||
      e.target.nextSibling.classList.contains('taken') ||
      e.target.previousSibling.classList.contains('taken')
    )
      return;
    if (active.classList.contains('submarine'))
      this.placeSubmarine(e.target, active);
  },
  handleDestroyer(active, e) {
    if (e.target.nextSibling == null) return;
    if (
      e.target.classList.contains('taken') ||
      e.target.nextSibling.classList.contains('taken')
    )
      return;
    if (active.classList.contains('destroyer'))
      this.placeDestroyer(e.target, active);
  },
  placeCarrier(target, active) {
    {
      target.classList.add('carrierPlaced', 'taken');
      target.nextSibling.classList.add('carrierPlaced', 'taken');
      target.nextSibling.nextSibling.classList.add('carrierPlaced', 'taken');
      target.previousSibling.previousSibling.classList.add(
        'carrierPlaced',
        'taken'
      );
      target.previousSibling.classList.add('carrierPlaced', 'taken');
      target.style.backgroundColor = 'red';
      target.previousSibling.style.backgroundColor = 'red';
      target.previousSibling.previousSibling.style.backgroundColor = 'red';
      target.nextSibling.style.backgroundColor = 'red';
      target.nextSibling.nextSibling.style.backgroundColor = 'red';
      active.style.display = 'none';
    }
  },
  placeBattleship(target, active) {
    target.classList.add('battleshipPlaced', 'taken');
    target.nextSibling.classList.add('battleshipPlaced', 'taken');
    target.nextSibling.nextSibling.classList.add('battleshipPlaced', 'taken');
    target.previousSibling.classList.add('battleshipPlaced', 'taken');
    target.style.backgroundColor = 'purple';
    target.nextSibling.style.backgroundColor = 'purple';
    target.nextSibling.nextSibling.style.backgroundColor = 'purple';
    target.previousSibling.style.backgroundColor = 'purple';
    active.style.display = 'none';
  },
  placeCruiser(target, active) {
    target.classList.add('cruiserPlaced', 'taken');
    target.nextSibling.classList.add('cruiserPlaced', 'taken');
    target.previousSibling.classList.add('cruiserPlaced', 'taken');
    target.style.backgroundColor = 'green';
    target.nextSibling.style.backgroundColor = 'green';
    target.previousSibling.style.backgroundColor = 'green';
    active.style.display = 'none';
  },
  placeSubmarine(target, active) {
    target.classList.add('submarinePlaced', 'taken');
    target.nextSibling.classList.add('submarinePlaced', 'taken');
    target.previousSibling.classList.add('submarinePlaced', 'taken');
    target.style.backgroundColor = 'blue';
    target.nextSibling.style.backgroundColor = 'blue';
    target.previousSibling.style.backgroundColor = 'blue';
    active.style.display = 'none';
  },
  placeDestroyer(target, active) {
    target.classList.add('destroyerPlaced', 'taken');
    target.nextSibling.classList.add('destroyerPlaced', 'taken');
    target.style.backgroundColor = 'pink';
    target.nextSibling.style.backgroundColor = 'pink';
    active.style.display = 'none';
  },
};
