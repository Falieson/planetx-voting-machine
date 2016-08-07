export function addGetIndexBy() {
  Array.prototype.getIndexBy = function (name, value) {
      for (var i = 0; i < this.length; i++) {
          if (this[i][name] == value) {
              return i;
          }
      }
      return -1;
  };
}


// [Examples of how to use Math.Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
// Returns a random number between 0 (inclusive) and 1 (exclusive)
// function getRandom() {
//   return Math.random();
// }
// Returns a random number between min (inclusive) and max (exclusive)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomBool() {
  return getRandomIntInclusive(0,1)===1? true:false;
}
