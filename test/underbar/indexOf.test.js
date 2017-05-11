const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.indexOf(arr, 'I')).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.indexOf(arr, '.')).toEqual(3);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.indexOf(arr, 'Coke')).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['I', 'am', 'Groot', '.', 'Groot'];
    expect(_.indexOf(arr, 'Groot')).toEqual(2);
  });

  it('starts searching at the given offset', () => {
    const arr = ['I', 'am', 'Groot', '.', 'Groot'];
    expect(_.indexOf(arr, 'Groot', 3)).toEqual(4);
  });

});
