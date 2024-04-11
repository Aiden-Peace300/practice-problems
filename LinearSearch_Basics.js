/*************************************************************
Linear Search is defined as a sequential search algorithm that 
starts at one end and goes through each element of a list until 
the desired element is found, otherwise the search continues 
till the end of the data set.
**************************************************************/

function linearAlgo(linearList, LinearTarget){
  for(let i = 0; i < linearList.length; i++){
    if(linearList[i] === target){
      return linearList[i];
    }
  }
  return "Not in the list";
}

// change the following variable values to your liking 
const list = [1, 3, 4, 7, 0, 10, 3];
let target = 9; 

console.log(linearAlgo(list, target));
