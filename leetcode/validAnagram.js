/*
LINK: https://leetcode.com/problems/valid-anagram/description/
PROBLEM: Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length) {    // O(1)
        return false;               // O(1)
    }

    // BIO-O FOR METHODS USE:
    // - split() = O(n)
    // - sort()  = O(log n)
    // - join()  = O(n)
    return s.split('').sort().join('') === t.split('').sort().join('') ? true : false;
};
