const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 5, 4, 7, 6];
    expect(_.filter(nums, num => num % 2 !== 0)).toEqual([5, 7]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      pronoun: 'I',
      verb: 'am',
      noun: 'Groot',
      punctuation: '.',
      number: 18
    }
    const numericValues = _.filter(obj, (value) => !isNaN(value));
    expect(numericValues).toEqual([18]);
  });
});
