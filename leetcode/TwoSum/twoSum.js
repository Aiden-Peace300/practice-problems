/* 
LINK: https://leetcode.com/problems/two-sum/
PROBLEM:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for(let i = 0; i <= nums.length; i++){      // O(n)
        let j = i + 1;                          // O(1)
        if(nums[i] + nums[j] === target){       // O(1)
            return [i, j];                      // O(1)
        }
    }
};

// Big O time complexity is linear O(n)

// console.log('twoSum([2,7,11,15], 9):', twoSum([2,7,11,15], 9)) // Expected Output: [0, 1]
// console.log('twoSum([3,2,4], 6):', twoSum([3, 2, 4], 6)) // Expected Output: [1, 2]
// console.log('twoSum([3,3], 6):', twoSum([3, 3], 6)) // Expected Output: [1, 2]
