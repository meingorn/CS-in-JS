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
//_________________________________________________BEGIN notes

  // Step 1. Get length of array
  // Step 2. Find mid point
  // Step 3. Compare if mid point is lower or higher than searched number
  // Step 4. lop off unneeded side
  // Step 5. go to step 1
//_________________________________________________END notes

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

function getMidPoint(arr, searchNumb) {
  var length = arr.length;
  var midPoint = Math.floor(length / 2);
  var newArr = arr;
  console.log(arr);
  console.log("array midpoint value: " + arr[midPoint]);

  if (arr[midPoint] > searchNumb) {

      var newArr = arr.slice(0, midPoint);
      return getMidPoint(newArr, searchNumb);

  } else if (arr[midPoint] < searchNumb) {

      var newArr = arr.slice(midPoint + 1, arr.length);
      return getMidPoint(newArr, searchNumb);

  } else {
      return midPoint;
  }
}


//OR

function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

  let midPoint = Math.floor(((stop-start)/2) + start)

  switch (true) {
    case arr[midPoint] === target:
      return true
    case stop - start === 0:
      return false
    case arr[midPoint] < target:
      return binarySearch(arr, target, midPoint+1, stop)
    case arr[midPoint] > target:
      return binarySearch(arr, target, start, midPoint)
  }
}

/*Let's unpack the main differences of this implementation:

Slice is no longer used:

We are eschewing the use of Array.prototype.slice because it is a relatively expensive operation (copying half of the current array with each recursive call!) and it is not required for the algorithm to function properly.

In place of slice, we are passing the start and stop indexes of the range of the array that we have narrowed the search down to. This keeps our heap happy by not cluttering it with (potentially many) partial, impermanent copies of the same (potentially massive) array.
We are passing two additional arguments, and they have defaults:

These arguments (start and stop) serve to keep track of the range of the array we are currently recurring on. They are our alternative to slice! The default arguments enable us to call this recursive function exactly the same as we would when using slice (should the user not provide an explicit range when it is first called).
We are using a switch statement:

The speed of a switch statement vs. an if-else chain depends on several factors, most notably the programming language and the amount of conditionals in each. A switch statement was used here primarily for readability. It is a control flow that matches what we are concerned with handling in this recursive function: 4 discrete cases, each requiring different action. Additionally, few individuals have a rare allergy to if-else statements that exceed 3 logical tests. For more information on JavaScript's switch statement and its performance vs. if-else, please take a look at this post: Javascript switch vs. if...else if...else, which links to this more informative page http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html

FROM https://stackoverflow.com/questions/38323787/how-to-create-a-binary-search-with-recursion/44633141#44633141
*/
