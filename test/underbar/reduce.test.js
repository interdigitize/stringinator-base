const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arr = [4, 3, 2, 1];
    const result = _.reduce(arr, (accumulator, num) => accumulator + num, 1);
    expect(result).toEqual(11);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arr = [4, 3, 2, 1];
    const result = _.reduce(arr, (accumulator, num) => accumulator + num);
    expect(result).toEqual(10);
  });

});
