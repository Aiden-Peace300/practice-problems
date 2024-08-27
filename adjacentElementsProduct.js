/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product
*/

// 

function solution(inputArray) {
   let largetProduct = inputArray[0] * inputArray[1];;
    for(let i = 0, j = i + 1; i <= inputArray.length - 1; i++, j++){
        if((inputArray[i] * inputArray[j] > largetProduct) && i != j){
          largetProduct = inputArray[i] * inputArray[j];
        }
    }
    return largetProduct;
}
