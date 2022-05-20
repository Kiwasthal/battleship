export default {
  //The grid is created with datasets indicating the position of each cell, corresponding to a two dimensional array
  //Used to correlate the board property of the Gameboard object with the DOM
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
