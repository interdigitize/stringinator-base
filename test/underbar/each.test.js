const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['I', 'am', 'Groot', '.'];
    let count = 0;
    _.each(arr, function(element, index, array){
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(4);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrLikeObj = {
      length: 4,
      pronoun: 'I',
      verb: 'am',
      noun: 'Groot',
      punctuation: '.'
    }
    let count = 0;
    _.each(arrLikeObj, function(element, index, iteratedArrayLikeObj){
      expect(element).toBe(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toBe(4);

  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      pronoun: 'I',
      verb: 'am',
      noun: 'Groot',
      punctuation: '.'
    }
    _.each(obj, function(value, key, iteratedObj){
      expect(typeof(value)).toEqual(typeof(iteratedObj[key]));
    });
  });
});
