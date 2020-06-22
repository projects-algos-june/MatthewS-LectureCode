// pick a number 4 = 1 x 2 x 3 x 4 = 24;

function factorial(n) {
  //base case
  if (n === 2) return 2;

  //recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5))


/*
Recursive Binary Search

Given a sorted array and a value, recursively determine whether value is found within array. 

rBinarySearch([1,3,5,6],4) = false; 

rBinarySearch([4,5,6,8,12],5) = true.

*/

let sortedArray = [1, 3, 5, 6, 8, 11, 14, 16, 19, 22];

function rBinarySearch(arr, target) {
  // base case
  if (arr.length === 0) return false;


  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex + 1);


  // recursive case
  if (target < arr[middleIndex]) {
    return rBinarySearch(leftArr, target);
  } else if (target > arr[middleIndex]) {
    return rBinarySearch(rightArr, target);
  } else {
    return true;
  }
}


// console.log(rBinarySearch(sortedArray, 5));



/*
Recursive Fibonacci

Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

rFib(2) = 1 (0+1); 

rFib(3) = 2 (1+1); 

rFib(4) = 3 (1+2); 

rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

*/

function rFib(n) {
  // base case
  if (n === 1 || n === 2) return 1;


  //recurse case 
  return rFib(n - 1) + rFib(n - 2);
}


// console.log(rFib(10))