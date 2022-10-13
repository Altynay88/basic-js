const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nLength = String(n).length - 1;
  let nDigitBefore, nDigitAfter, nBefore, nAfter, nGeneral, nMax;

  nDigitAfter = 10 ** nLength;
  nMax = n % nDigitAfter;
  nDigitBefore = nDigitAfter;

  for (let k = 1; k < nLength; k++) {
    nDigitAfter = Math.pow(10, nLength - k);
    nBefore = Math.floor(n / nDigitBefore);
    nAfter = n % nDigitAfter;
    nGeneral = Number(String(nBefore) + String(nAfter));
    nDigitBefore = nDigitAfter;
    if (nGeneral > nMax) {
      nMax = nGeneral;
    }
  }
  nGeneral = Math.floor(n / 10);
  if (nGeneral > nMax) {
    nMax = nGeneral;
  }
  return nMax;
}

module.exports = {
  deleteDigit
};