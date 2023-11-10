/* 
LINK: https://leetcode.com/problems/fizz-buzz/description/
PROBLEM:
Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];                        // O(1)

    for(let i = 1; i <= n; i++){            // O(n)
        if(i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz');        // O(1)
        } else if(i % 3 === 0) {
            answer.push('Fizz');            // O(1)
        } else if(i % 5 === 0) {
            answer.push('Buzz');            // O(1)
        } else {
            answer.push(i.toString());      // O(1)
        }
    }
    return answer;                          // O(1)
};

// Big O time complexity is linear O(n)
