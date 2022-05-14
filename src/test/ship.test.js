import Ship from '../shipFactory';

let fooShip = Ship(3, [2, 3, 4], [1]);

describe('Ship', () => {
  test('length', () => {
    expect(fooShip.length).toBe(3);
  });
  test('default isSunk', () => {
    expect(fooShip.isSunk).toBe(false);
  });
  test('default isDestroyed', () => {
    expect(fooShip.isDestroyed()).toBe(false);
  });
  test('default toggleIsSunkStatus', () => {
    fooShip.isDestroyed();
    expect(fooShip.isSunk).toBe(false);
  });
  test('position X', () => {
    expect(fooShip.positionX).toEqual([2, 3, 4]);
  });
  test('position Y', () => {
    expect(fooShip.positionY).toEqual([1]);
  });
  test('default printed position', () => {
    expect(fooShip.printed).toEqual(['', '', '']);
  });
});
