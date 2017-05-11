const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrLikeObj = {length: 4, 'name': 'Groot', 'job title': 'guardian'};
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {'name': 'Groot', 'job title': 'guardian'};
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
