/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanObj[s[i]] < romanObj[s[i + 1]]) {
      // If the current symbol's value is smaller than the next one, subtract it.
      sum -= romanObj[s[i]];
    } else {
      sum += romanObj[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt('MCMXCIV'));
