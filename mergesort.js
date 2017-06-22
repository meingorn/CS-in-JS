let unsortedArray = [6, 2, 4, 6, 13, 35, 2222, 542, 13, 521, 24124, 1, 3];


function mergeSort(array) {
  if (array.length < 2){ //make sure there are at least two elements in array to compare
    return array      // if not, just return the input
  }
    //finding the midpoint and dividing the array into two
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right)); //calling the merge function to combine
                                                    //then calling itself to split array further
                                                    //keeps calling until it returns an array ln 6
}

function merge(left, right) {
  let result = []; // empty array to store elements

  while (left.length && right.length) { //while both arrays have elements within them...
    if (left[0] < right[0]) {         //if left is smaller than right, push left into the array
      result.push(left.shift());
    } else {                          //otherwise push the right element into the array (result)
      result.push(right.shift());
    }
  }
  return result.concat(left.slice()).concat(right.slice());   //return new array w/ sorted elements
}

console.log(mergeSort(unsortedArray.slice())) //log answer -> [ 1, 2, 3, 4, 6, 6, 13, 13, 35, 521, 542, 2222, 24124 ]
