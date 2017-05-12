const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 2, 2, 5, 2, 2, 10];
    expect(_.uniq(nums)).toEqual([2, 5, 10]);
  });
});
