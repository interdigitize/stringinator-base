const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const nums = [1, 2, 3, 4, 6];
    const mappedArr = _.map(nums, function(el){ el * el});
    expect(mappedArr).toEqual([1, 4, 9, 16, 36]);
  });
});
