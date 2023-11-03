/**
 * LINK: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {  
    const newNums = [];

    do {
      if(nums1[nums1.length - 1] !== 0) {
        newNums.push(nums1[nums1.length - 1]);
      }

      nums1.pop();
    } while(nums1.length !== 0);
  
    for(let i = 0; i < m; i++) {
       nums1.push(newNums[i]);
    }
 
    for(let i = 0; i < n; i++) {
      if(nums2[i] !== 0){
        nums1.push(nums2[i]);
      }
    }

  return nums1.sort();
};
