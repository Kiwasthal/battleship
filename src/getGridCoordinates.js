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
    let myCarrierCoordinatesY = [];
    placedTiles.forEach(tile => {
      myCarrierCoordinatesY.push(tile.dataset.column);
    });
    myCarrierCoordinatesY = myCarrierCoordinatesY.filter(function (item, pos) {
      return myCarrierCoordinatesY.indexOf(item) == pos;
    });
    return myCarrierCoordinatesY;
  },
};
