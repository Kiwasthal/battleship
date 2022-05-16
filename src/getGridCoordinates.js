export default {
  getCoordinatesX(check) {
    let placedTiles = document.querySelectorAll(check);
    let myCarrierCoordinatesX = [];
    placedTiles.forEach(tile => {
      myCarrierCoordinatesX.push(tile.dataset.row);
    });
    myCarrierCoordinatesX = myCarrierCoordinatesX.filter(function (item, pos) {
      return myCarrierCoordinatesX.indexOf(item) == pos;
    });
    return myCarrierCoordinatesX;
  },
  getCoordinatesY(check) {
    let placedTiles = document.querySelectorAll(check);
    console.log(placedTiles);
    let myCarrierCoordinatesY = [];
    placedTiles.forEach(tile => {
      myCarrierCoordinatesY.push(tile.dataset.column);
    });
    myCarrierCoordinatesY = myCarrierCoordinatesY.filter(function (item, pos) {
      return myCarrierCoordinatesY.indexOf(item) == pos;
    });
    return myCarrierCoordinatesY;
  },
  getCoordinates() {
    let carrier = {
      x: this.getCoordinatesX('carrierPlaced'),
      y: this.getCoordinatesY('carrierPlaced'),
    };
    let battleship = {
      x: this.getCoordinatesX('battleshipPlaced'),
      y: this.getCoordinatesX('battleshipPlaced'),
    };
    let cruiser = {
      x: this.getCoordinatesX('cruiserPlaced'),
      y: this.getCoordinatesY('cruiserPlaced'),
    };
    let submarine = {
      x: this.getCoordinatesX('submarinePlaced'),
      y: this.getCoordinatesX('submarinePlaced'),
    };
    let destroyer = {
      x: this.getCoordinatesX('submarinePlaced'),
      y: this.getCoordinatesX('submarinePlaced'),
    };
    return { carrier, battleship, cruiser, submarine, destroyer };
  },
};
