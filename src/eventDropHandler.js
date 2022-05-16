export default {
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
      this.placeBattleship(target, active);
  },
  handleCruiser() {},
  handleSubmarine() {},
  handleDestroyer() {},
  placeCarrier(target, active) {
    {
      target.classList.add('carrierPlaced', 'taken');
      target.nextSibling.classList.add('carrierPlaced', 'taken');
      target.nextSibling.nextSibling.classList.add('CarrierPlaced', 'taken');
      target.previousSibling.previousSibling.classList.add(
        'CarrierPlaced',
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
};
