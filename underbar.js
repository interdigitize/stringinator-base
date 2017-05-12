// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  if(n === 1){
    return array.shift();
  }
  return array.splice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  if(n === 1){
    return array.pop();
  }
  if(n >= array.length){
    return array;
  }
  return array.splice((array.length - n), n);
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for(fromIndex; fromIndex <= array.length; fromIndex++){
    if(array[fromIndex] === target){
      return fromIndex;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  if (obj.length !== undefined){
    return true;
  }
  return false;
};


// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  for(var i = 0; i < obj.length; i++){
    callback(obj[i], i, obj);
  }
  return obj;
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const map = function(obj, callback=identity) {
  const elementsAfterCallback = [];
  for(var i = 0; i < obj.length; i++){
    elementsAfterCallback.push(callback(obj[i], i, obj));
  }
  return elementsAfterCallback;
};


// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  const selectedKeyValues = [];
    for (var property in obj){
      if(obj[property].hasOwnProperty('age')){
        selectedKeyValues.push(obj[property].age);
      }
  }
  return selectedKeyValues;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).

const reduce = function(obj, callback=identity, initialValue) {
  // for(var i = 0; i < obj.length; i++){
  //   callback()
  // }
};

// if(Array.isArray(obj)){
//   for(var i = 0; i < obj.length; i++){
//     callback(total, obj[i]);
//   }


// Return true if the object contains the target.
const contains = function(obj, target) {
  if(Array.isArray(obj)){
    console.log('hi');
    for(var i = 0; i < obj.length; i++){
      if(obj[i] === target){
        return true;
      }
    }
    return false;
  }
  for(var property in obj){
    console.log(obj[property]);
    if(obj[property] === target){
      return true;
    }
  }
  return false;
};


// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++) {
      if(!callback(obj[i])) {
        return false;
      };
    }
    return true;
  }
  for(var property in obj){
    if(!callback(obj[property])) {
      return false;
    }
  }
  return true;
};


// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  if(Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++) {
      if(callback(obj[i])) {
        return true;
      };
    }
    return false;
  }
  for(var property in obj){
    if(callback(obj[property])) {
      return true;
    }
  }
  return false;
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  const filteredArr = [];
  if(Array.isArray(obj)){
    for(var i = 0; i < obj.length; i++) {
      if(callback(obj[i])){
        filteredArr.push(obj[i]);
      }
    }
    return filteredArr;
  }
  for(var property in obj){
    if(callback(obj[property])){
      filteredArr.push(obj[property]);
    }
  }
  return filteredArr;
};




// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  // Your code goes here
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  const deDupped = [];
  for(var i = 0; i < obj.length; i++){
    if (obj[i] === obj[0]){
      deDupped.push(obj[i]);
    }

  }
  return deDupped;
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
