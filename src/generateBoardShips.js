import getCoordinates from './getGridCoordinates';
import shipFactory from './shipFactory';

//From player placed ships
export default {
  getsCoordinatesOfPlacedShipsFromDom() {
    let carrier = {
      x: getCoordinates.getCoordinatesX('.carrierPlaced'),
      y: getCoordinates.getCoordinatesY('.carrierPlaced'),
    };
    let battleship = {
      x: getCoordinates.getCoordinatesX('.battleshipPlaced'),
      y: getCoordinates.getCoordinatesY('.battleshipPlaced'),
    };
    let cruiser = {
      x: getCoordinates.getCoordinatesX('.cruiserPlaced'),
      y: getCoordinates.getCoordinatesY('.cruiserPlaced'),
    };
    let submarine = {
      x: getCoordinates.getCoordinatesX('.submarinePlaced'),
      y: getCoordinates.getCoordinatesY('.submarinePlaced'),
    };
    let destroyer = {
      x: getCoordinates.getCoordinatesX('.destroyerPlaced'),
      y: getCoordinates.getCoordinatesY('.destroyerPlaced'),
    };
    return { carrier, battleship, cruiser, submarine, destroyer };
  },
  createCarrier() {
    let coordinatesX = this.getsCoordinatesOfPlacedShipsFromDom().carrier.x;
    let coordinatesY = this.getsCoordinatesOfPlacedShipsFromDom().carrier.y;
    let carrier = shipFactory(5, coordinatesX, coordinatesY);
    if (carrier.positionY.length === 1) carrier.reversed = true;
    return carrier;
  },
  createBattleship() {
    let coordinatesX = this.getsCoordinatesOfPlacedShipsFromDom().battleship.x;
    let coordinatesY = this.getsCoordinatesOfPlacedShipsFromDom().battleship.y;
    let battleship = shipFactory(4, coordinatesX, coordinatesY);
    if (battleship.positionY.length === 1) battleship.reversed = true;

    return battleship;
  },
  createCruiser() {
    let coordinatesX = this.getsCoordinatesOfPlacedShipsFromDom().cruiser.x;
    let coordinatesY = this.getsCoordinatesOfPlacedShipsFromDom().cruiser.y;
    let cruiser = shipFactory(3, coordinatesX, coordinatesY);
    if (cruiser.positionY.length === 1) cruiser.reversed = true;

    return cruiser;
  },
  createSubmarine() {
    let coordinatesX = this.getsCoordinatesOfPlacedShipsFromDom().submarine.x;
    let coordinatesY = this.getsCoordinatesOfPlacedShipsFromDom().submarine.y;
    let submarine = shipFactory(3, coordinatesX, coordinatesY);
    if (submarine.positionY.length === 1) submarine.reversed = true;

    return submarine;
  },
  createDestroyer() {
    let coordinatesX = this.getsCoordinatesOfPlacedShipsFromDom().destroyer.x;
    let coordinatesY = this.getsCoordinatesOfPlacedShipsFromDom().destroyer.y;
    let destroyer = shipFactory(2, coordinatesX, coordinatesY);
    if (destroyer.positionY.length === 1) destroyer.reversed = true;

    return destroyer;
  },
  createShips() {
    return [
      this.createCarrier(),
      this.createBattleship(),
      this.createCruiser(),
      this.createSubmarine(),
      this.createDestroyer(),
    ];
  },
};
