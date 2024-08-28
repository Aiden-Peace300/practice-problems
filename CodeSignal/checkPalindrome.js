/*
For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.
*/

// BIG O FOR solution FUNCTION IS O(N) AKA LINEAR TIME

function solution(inputString) {
    if(inputString.length <= 1){
      return true
    } else {
       for(let i = 0, j = inputString.length - 1; i <= j; i++, j--){
           if(inputString[i] !== inputString[j]){
              return false;
           }
       }
       return true
   }
}
