/**
 * 
 * @param {number[]} nums
 * @return {number}
 *
 */
// comment
var majorityElement = function(nums) {
    const counts = {}; 
    for(let i = 0; i < nums.length; i++) {
        
        if(counts[nums[i]]) {
            counts[nums[i]]++;
        } else {
            counts[nums[i]] = 1;
        }
        if(counts[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
};
