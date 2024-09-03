/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
*/

function solution(statues) {
    if (!Array.isArray(statues)) {
        console.error("statues is not an array");
        return;
    }
    let sortedArr = statues.sort((a, b) => a - b);
    console.log(sortedArr);
  
    let gapArr = []; 
    
    for(let i = 0; i < sortedArr.length; i++){
      let current = sortedArr[i];
      let next = sortedArr[i + 1];

      if(next - current > 1) {
        for(let j = current + 1; j < next; j++){
         gapArr.push(j); 
        }
      }
    }
    
    return gapArr.length;
}
