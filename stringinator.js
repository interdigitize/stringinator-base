const _ = require('./underbar');

const first = function(str, n) {
  var strArr = str.split('');
  var firstChars = _.first(strArr, n);
  if(firstChars.length === 1){
    return firstChars[0];
  }
  return firstChars.join('');

};

const last = function(str, n) {
  var strArr = str.split('');
  var lastChars = _.last(strArr, n);
  if(lastChars.length === 1){
    return lastChars[lastChars.length - 1];
  }
  return lastChars.join('');
};

const removeChar = function(str, target) {
  // const strArr = str.split('');
  // var removedChar = _.reject(strArr, target);
  // return removedChar;
};

const hasChar = function(str, target) {
  // const strArr = str.split('');
  // return _.some(strArr, n);
};

const isOnlyDigits = function(str) {
  const strArr = str.split('');

  return _.every(strArr, char => typeof(parseInt(char, 10)) === 'number');
};

const filterToOnlyDigits = function(str) {
  const strArr = str.split('');

  console.log(strArr);
  // var onlyDigits = _.filter(strArr, char => typeof(char) === 'number');
  return strArr;
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
