const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.last(arr, 1)).toEqual('.');
  });

  it('returns the last 2 elements of an array', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.last(arr, 2)).toEqual(['Groot', '.']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.last(arr, 7)).toEqual(['I', 'am', 'Groot', '.']);
  });
});
