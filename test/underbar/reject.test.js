const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 4, 5, 6, 7, 8, 9, 11];
    expect(_.reject(arr, num => num % 2 !== 0)).toEqual([4, 6, 8]);
  });

  it('rejects null values from an object', () => {
    const sentance = {
      pronoun: 'I',
      verb: 'am',
      negator: null,
      noun: 'Groot',
      punctuation: '.',
      number: null
    }
    const removeNull = _.reject(sentance, (value) => value === null);
    expect(removeNull).toEqual(['I', 'am', 'Groot', '.']);
  });
});
