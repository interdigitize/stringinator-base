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
  const strArr = str.split('');
  var removedChar = _.reject(strArr, el => el === target);
  return removedChar.join('');
};

const hasChar = function(str, target) {
  const strArr = str.split('');
  var answer = _.some(strArr, el => el === target);
  return answer;
};


const isOnlyDigits = function(str) {
  const strArr = str.split('');
  var onlyDigits = _.every(strArr, char => !isNaN(char));
  return onlyDigits;
};


const filterToOnlyDigits = function(str) {
  const strArr = str.split('');
  var onlyDigits = _.filter(strArr, char => !isNaN(char) && char !== " ");
  if(onlyDigits.length === 1){
    return onlyDigits[0];
  }
  return onlyDigits.join('');
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
  const strArr = str.split('');
  const charTotals = {};
  var charCounting = function(char){
    if(charTotals.hasOwnProperty(char)){
      charTotals[char] += 1;
    } else {
      charTotals[char] = 1;
    }
  };
  _.each(strArr, charCounting);
  return charTotals;
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
