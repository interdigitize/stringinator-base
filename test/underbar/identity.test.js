const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(9)).toBe(9);
  });

  it('returns the same array if given an array', () => {
    const arr = [1, 3, 5]
    expect(_.identity(arr)).toBe(arr);
  });

  it('returns the same object if given an object', () => {
    const obj = {
      number: 9,
      'a string': 'hello world'
    };
    expect(_.identity(obj)).toBe(obj);
  });
});
