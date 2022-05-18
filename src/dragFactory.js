function Drag(subject) {
  let dative = this,
    handle,
    dragClickOffsetX,
    dragClickOffsetY,
    lastDragX,
    lastDragY;

  subject.draggable = true;

  dative.styleHandle(subject);

  subject.addEventListener('dragstart', function (e) {
    handle = dative.makeHandle(subject);

    dragClickOffsetX = e.layerX;
    dragClickOffsetY = e.layerY;

    this.style.opacity = 0;
  });

  subject.addEventListener('drag', function (e) {
    if (subject.classList.contains('carrier')) {
      var useX = e.x + 60,
        useY = e.y - 180;
    } else if (subject.classList.contains('battleship')) {
      var useX = e.x + 85,
        useY = e.y - 80;
    } else if (subject.classList.contains('cruiser')) {
      var useX = e.x + 75,
        useY = e.y + 20;
    } else if (subject.classList.contains('submarine')) {
      var useX = e.x + 72,
        useY = e.y + 120;
    } else if (subject.classList.contains('destroyer')) {
      var useX = e.x + 72,
        useY = e.y + 200;
    }

    if (useX === 0 && useY === 0) {
      useX = lastDragX;
      useY = lastDragY;
    }

    if (useX === lastDragX && useY === lastDragY) {
      return;
    }

    dative.translate(
      useX - dragClickOffsetX,
      useY - dragClickOffsetY,
      handle,
      subject
    );

    lastDragX = useX;
    lastDragY = useY;
  });

  let madeDrop = gridClassCheck => {
    let check = [];
    document.querySelectorAll('.playerTile').forEach(x => {
      if (x.classList.contains(gridClassCheck)) check.push(x);
    });
    if (check.length > 0) return true;
    return false;
  };

  subject.addEventListener('dragend', function (e) {
    this.style.opacity = 1;
    if (subject.classList.contains('carrier'))
      if (madeDrop('carrierPlaced')) this.style.display = 'none';
    if (subject.classList.contains('battleship'))
      if (madeDrop('battleshipPlaced')) this.style.display = 'none';
    if (subject.classList.contains('cruiser'))
      if (madeDrop('cruiserPlaced')) this.style.display = 'none';
    if (subject.classList.contains('submarine'))
      if (madeDrop('submarinePlaced')) this.style.display = 'none';
    if (subject.classList.contains('destroyer'))
      if (madeDrop('destroyerPlaced')) this.style.display = 'none';

    handle.parentNode.removeChild(handle);
  });
}

Drag.prototype.styleHandle = function (node) {
  node.style['userSelect'] = 'none';
};

/**
 * @param {HTMLElement} subject
 * @return {HTMLElement}
 */
Drag.prototype.makeHandle = function (subject) {
  return this.makeClone(subject);
};

/**
 * Clone node.
 *
 * @param {HTMLElement} node
 * @return {HTMLElement}
 */
Drag.prototype.makeClone = function (node) {
  var clone;

  clone = node.cloneNode(true);

  this.styleClone(clone, node.offsetWidth, node.offsetHeight);

  node.parentNode.insertBefore(clone, node);

  return clone;
};

/**
 * Make clone width and height static.
 * Take clone out of the element flow.
 *
 * @param {HTMLElement} node
 * @param {Number} width
 * @param {Nubmer} height
 */
Drag.prototype.styleClone = function (node, width, height) {
  node.style.position = 'fixed';
  node.style.zIndex = 1001;
  node.style.width = width + 'px';
  node.style.height = height + 'px';
  node.style.left = '-9999px';

  node.style.margin = 0;
  node.style.padding = 0;
};

/**
 * Used to position the handle element.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {HTMLElement} handle
 * @param {HTMLElement} subject
 */
Drag.prototype.translate = function (x, y, handle, subject) {
  handle.style.left = x + 'px';
  handle.style.top = y + 'px';
};

export default () => {
  new Drag(document.querySelector('.carrier'));
  new Drag(document.querySelector('.battleship'));
  new Drag(document.querySelector('.cruiser'));
  new Drag(document.querySelector('.submarine'));
  new Drag(document.querySelector('.destroyer'));
};
