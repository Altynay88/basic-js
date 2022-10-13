const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let encoded = [];
  for (let k = 1; k < str.length + 1; k++) {
    if (str[k] === str[k - 1]) {
      num += 1;
    } else {
      if (num === 1) {
        encoded.push(str[k - 1]);
      } else {
        encoded.push(num + str[k - 1]);
      }
      num = 1;
    }
  }
  return encoded.join("");
}

module.exports = {
  encodeLine
};