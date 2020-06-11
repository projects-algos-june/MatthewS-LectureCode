/*
Pop Front

Given an array, remove and return the value at the beginning of the array. 
Do this without using any built-in array methods except pop().

*/

let myArray = ["abc", 3, 5, 6, 7, 8, 9, 10];

function popFront(array) {
  var returnValue = array[0];

  for (var i = 1; i < array.length; i++) {
    var currentValue = array[i];
    array[i - 1] = currentValue
  }

  array.length--;
  console.log(returnValue);
  return array;
}


// console.log(popFront(myArray));



/*
Min to Front

Given an array of comparable values, move the lowest element to array’s front,
 shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], 
 change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

*/

let arr = [4, 2, 1, 3, 5];

function minToFront(array) {
  let min = arr[0]; // grabbing first index to compare.
  let idx = undefined; // grabbing the place in the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = arr[i];
      idx = i;
    }
  }
  for (let i = idx; i > 0; i--) {
    array[i] = array[i - 1];
  }
  arr[0] = min;
  return arr;
}

// console.log(minToFront(arr));

/*
Remove Duplicates

Sara is looking to hire an awesome web developer and has received applications from various sources. 
Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
Because array elements are already in order, all duplicate values will be grouped together. As with all these array 
challenges, do this without using any built-in array methods.

Second: Solve this without using any nested loops.

*/

let names = ["Michael", "Michael", "Skye", "Tobin", "Tobin", "Tom",]

function removeDupes(arr) {
  var names = {};
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (names[arr[i]] === undefined) {
      names[arr[i]] += 0
    }
  }

  for (key in names) {
    newArr.push(key);
  }

  return newArr;
}

console.log(removeDupes(names));

