const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [4, 3, 2, 1];
    expect(_.some(arr, num => num % 2 !== 0)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const arr = [4, 6, 2, 8];
    expect(_.some(arr, num => num % 2 !== 0)).toBe(false);
  });

});
