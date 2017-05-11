const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = [2, 4, 6];
    expect(_.first(arr, 1)).toEqual(2);
  });

  it('returns the first 2 elements of an array', () => {
    const arr = [2, 4, 6];
    expect(_.first(arr, 2)).toEqual([2, 4]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [2, 4, 6];
    expect(_.first(arr, 5)).toEqual([2, 4, 6]);
  });
});
