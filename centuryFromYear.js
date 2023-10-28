/*
PROBLEM: Codesignal 2: centuryFromYear
Given a year, return the century it is in. The first century spans from the year 1 up to and 
including the year 100, the second - from the year 101 up to and including the year 200, etc.
*/

function solution(year) {
   if (year <= 0) {
       return -1; // Invalid year
   }
   
   let century = 0;
   if (year % 100 === 0) {
       century = year / 100;
   } else {
       century = (year / 100) + 1;
   }
   
   return Math.floor(century);
}
