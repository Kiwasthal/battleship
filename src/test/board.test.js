import boardFactory from '../boardFactory';
import Ship from '../shipFactory';

let gameboard = boardFactory();
let fooShip = Ship(3, [2, 3, 4], [1]);

describe('board', () => {
  test('board length', () => {
    expect(gameboard.board[0].length).toBe(10);
  });
  test('board length proper', () => {
    expect(gameboard.board[9].length).toBe(10);
  });
  gameboard.cataloguesShips(fooShip);
  it('properly catalogues ships', () => {
    expect(gameboard.shipLibrary).toEqual([fooShip]);
  });
  gameboard.fillsBoardWithShips();
  it('propery places ships in a copy of the board', () => {
    expect(
      gameboard.board[2][1] && gameboard.board[3][1] && gameboard.board[4][1]
    ).toEqual('ship');
  });
  it('works if no ships are yet destroyed', () => {
    expect(gameboard.areAllShipsDestroyed()).toBe(false);
  });
  gameboard.receivesHit([3, 1]);
  it('properly receives a hit', () => {
    expect(gameboard.board[3][1]).toEqual('X');
  });
  it('passes the hit coordinates to the correct ship', () => {
    expect(fooShip.printed).toEqual(['', 'X', '']);
  });
  it('properly handles a ship which is not yet sunk', () => {
    fooShip.toggleIsSunkStatus();
    expect(fooShip.isSunk).toBe(false);
  });
  gameboard.receivesHit([0, 0]);
  it('properly handles a miss', () => {
    expect(gameboard.board[0][0]).toEqual('miss');
  });
  it('can sink a ship', () => {
    gameboard.receivesHit([2, 1]);
    gameboard.receivesHit([4, 1]);
    expect(fooShip.printed).toEqual(['X', 'X', 'X']);
    expect(fooShip.isSunk).toBe(true);
  });
  it('can check whether all ships are destroyed', () => {
    gameboard.receivesHit([2, 1]);
    gameboard.receivesHit([4, 1]);
    expect(gameboard.areAllShipsDestroyed()).toBe(true);
  });
});
