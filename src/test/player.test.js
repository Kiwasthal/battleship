import Player from '../Player';

describe('player', () => {
  let player = Player(true, false, 'Captain');

  test('player name', () => {
    expect(player.name).toBe('Captain');
  });
  test('If player is playing', () => {
    expect(player.isPlaying).toBe(true);
  });
});
