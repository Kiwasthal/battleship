import generateBoardShips from './generateBoardShips';
import animations from './animations';

//Creating the boards action's then inside the factory we create the Gameboard Object based on these actions
const boardActions = {
  //Taking information from the generateBoardShips object it detects the ships placed on the grid and catalogues
  //them inside the object's ship library
  cataloguesShips() {
    const ships = generateBoardShips.createShips();
    ships.forEach(ship => this.shipLibrary.push(ship));
  },
  //Registers the ships in an two dimensional array (property of Gameboard Object)
  fillsBoardWithShips() {
    for (const ship of this.shipLibrary) {
      for (const x of ship.positionX) {
        for (const y of ship.positionY) this.board[x][y] = 'ship';
      }
    }
  },
  //Checks if the current tile contains a ship and handles the results
  receivesHit(coordinatesOfHit, tile) {
    const coordinatesX = coordinatesOfHit[0];
    const coordinatesY = coordinatesOfHit[1];
    this.handlesHit(coordinatesX, coordinatesY, tile);
    if (
      this.board[coordinatesX][coordinatesY] === 'carrier' ||
      this.board[coordinatesX][coordinatesY] === 'battleship' ||
      this.board[coordinatesX][coordinatesY] === 'cruiser' ||
      this.board[coordinatesX][coordinatesY] === 'submarine' ||
      this.board[coordinatesX][coordinatesY] === 'destroyer' ||
      this.board[coordinatesX][coordinatesY] === 'ship'
    ) {
      animations.animateHitTile(tile);
      this.registersHit(coordinatesX, coordinatesY);
    }
  },
  //Handles the current tile clicked , correctly making changes in the board if it's a miss , handleHit is called in receiveHit function
  handlesHit(coordinatesX, coodinatesY, tile) {
    if (this.board[coordinatesX][coodinatesY] === '') {
      animations.animateMissTile(tile);
      this.board[coordinatesX][coodinatesY] = 'miss';
      return;
    }
    if (
      this.board[coordinatesX][coodinatesY] === 'miss' ||
      this.board[coordinatesX][coodinatesY] === 'X'
    )
      return;
  },
  //Checks if all ships of current library have a isSunk truthy property
  areAllShipsDestroyed() {
    return (
      this.shipLibrary.filter(ship => ship.isSunk).length ===
      this.shipLibrary.length
    );
  },
  //Passes the hit to the correct ship object of the libray , marking the position of the Hit
  //If the hit destroyes the ship, it' toggles it's isSunk status
  registersHit(coordinatesX, coordinatesY) {
    this.board[coordinatesX][coordinatesY] = 'X';
    for (const ship of this.shipLibrary)
      for (const x of ship.positionX)
        for (const y of ship.positionY) {
          if (y == coordinatesY && x == coordinatesX)
            if (ship.reversed) ship.printed[ship.positionX.indexOf(x)] = 'X';
            else ship.printed[ship.positionY.indexOf(y)] = 'X';
          ship.toggleIsSunkStatus();
        }
  },
};

//Exporting the board factory
export default () => {
  const Gameboard = Object.create(boardActions);
  Gameboard.board = [...Array(10)].map(() => Array(10).fill('')); //Creates a [10][10] array
  Gameboard.shipLibrary = [];
  return Gameboard;
};
