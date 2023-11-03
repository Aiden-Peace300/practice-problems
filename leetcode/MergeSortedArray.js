/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {  
    const newNums = [];
    let counter = 0;

    // populating newNums with all nums1 elements 
    do {
      newNums.push(nums1[counter]);
      counter++;
    } while(newNums.length <= m);
  
    // emptying nums1 array completely! 
    do {
      nums1.pop();
    } while(nums1.length !== 0);

    // pushing elements from newNums into nums1
    for(let i = 0; i < m; i++) {
       nums1.push(newNums[i]);
    }
 
    // pushing elements from nums2 into nums1
    for(let j = 0; j < n; j++) {
       nums1.push(nums2[j]);
    }

    // ensuring negative numbers are also sorted appropriately
    nums1.sort((a, b) => {
      return a - b;
    });

  return nums1;
};
