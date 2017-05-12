const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.contains(arr, 'am')).toBe(true)
  });

  it('returns false if an array does not contain the target', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    expect(_.contains(arr, 'blueberries')).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      pronoun: 'I',
      verb: 'am',
      noun: 'Groot',
      punctuation: '.'
    }
    expect(_.contains(obj, 'Groot')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      pronoun: 'I',
      verb: 'am',
      noun: 'Groot',
      punctuation: '.'
    }
    expect(_.contains(obj, 'grapefruit')).toBe(false);
  });

});
