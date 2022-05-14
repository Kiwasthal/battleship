import Ship from '../shipFactory';

let fooShip = Ship(3, [2, 3, 4], [1]);

describe('Ship', () => {
  test('length', () => {
    expect(fooShip.length).toBe(3);
  });
});
