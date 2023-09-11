/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numAsString = x.toString();

  for (let i = 0; i <= numAsString.length; i++) {
    const j = numAsString.length - 1 - i;
    if (numAsString[i] !== numAsString[j]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome(1000021));
// console.log(isPalindrome(121));
