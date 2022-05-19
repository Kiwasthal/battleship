import boardFactory from '../boardFactory';
import Ship from '../shipFactory';
import generateBoardShips from '../generateBoardShips';
import animations from '../animations';

let gameboard = boardFactory();
let fooShip = Ship(3, [2, 3, 4], [1]);
let barShip = Ship(4, [2], [5, 6, 7, 8]);

describe('board', () => {
  test('board length', () => {
    expect(gameboard.board[0].length).toBe(10);
  });
  test('board length proper', () => {
    expect(gameboard.board[9].length).toBe(10);
  });
  gameboard.shipLibrary.push(fooShip);
  gameboard.shipLibrary.push(barShip);
  it('works if no ships are yet destroyed', () => {
    expect(gameboard.areAllShipsDestroyed()).toBe(false);
  });

  gameboard.fillsBoardWithShips();
  it('properly fills board with ships from library', () => {
    expect(gameboard.board[3][1]).toBe('ship');
  });
  it('works with reversed ships', () => {
    expect(gameboard.board[2][6]).toBe('ship');
  });

  it('can sink a ship', () => {
    fooShip.reversed = true;
    gameboard.registersHit(2, 1);
    gameboard.registersHit(3, 1);
    gameboard.registersHit(4, 1);
    expect(fooShip.isSunk).toBe(true);
  });
  gameboard.shipLibrary.pop();
  it('can detect if all ships are destroyed', () => {
    expect(gameboard.areAllShipsDestroyed()).toBe(true);
  });
});
