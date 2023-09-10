/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (i !== j) {
          return [i, j];
        }
      }
    }
  }
};

// console.log('twoSum([2,7,11,15], 9):', twoSum([2,7,11,15], 9)) // Expected Output: [0, 1]
// console.log('twoSum([3,2,4], 6):', twoSum([3, 2, 4], 6)) // Expected Output: [1, 2]
// console.log('twoSum([3,3], 6):', twoSum([3, 3], 6)) // Expected Output: [1, 2]
