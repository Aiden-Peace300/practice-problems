function binarySearch(arr, target) {
   let first = 0;
   let last = arr.length - 1;
   while (first <= last ){
     let midpoint = Math.floor((first + last) / 2);
     if(arr[midpoint] === target){
       return console.log(`Target ${target} found at index ${midpoint} in the array: [${arr}]`);
     } else if (arr[midpoint] < target){
       first = midpoint + 1;
     } else {
       last = midpoint - 1;
     } 
   }
  return console.log(`Target ${target} not found in the array: [${arr}]`);
} 

const array = [1, 2, 3, 4, 5, 6, 9, 22, 33, 55, 99, 102, 204];
const target = 32;

binarySearch(array, target);
