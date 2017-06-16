//Binary Search is a logarithmic algorithm, its logarithmic runtime O(log n) means with every input added the runtime is cur in half. Any Binary seach algorithm has two inputs: one is a list that needs to be sorted in some way, the other is a single value to search for within the array. Imagine searching through a dictionary ("is f before or after the middle of the dictionary, cut in half, repeat")

function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high)/2, 10);
    element = array[mid];
    if (element < key) {
      high = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}
