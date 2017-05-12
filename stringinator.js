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
  return lastChars.join(''); //why is join not working? TypeError: firstChars.join is not a function
};

const removeChar = function(str, target) {
  const strArr = str.split('');
  console.log(_.reject(strArr, target));
  return _.reject(strArr, target);

};

const hasChar = function(str, target) {
  const strArr = str.split('');
  return _.some(strArr, n);
};

const isOnlyDigits = function(str) {
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
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
