const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'Groot', age: 4},
      {name: 'Root', age: 234}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([4, 234]);
  });

});
