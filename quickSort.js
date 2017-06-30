let testArray = [50, 2, 3, 5, 1, 6, 23, 42, 12, 35, 79, 34, 75, 34, 23, 52, 67, 45, 97, 64, 49, 75]

quickmiddleSort = (function(){

  //partitions array into two parts, looping through until elements left from pivot are less than elements on right
  function partition(array, left, right) {
    //get pivot position
    var pivot = array[(left + right) >>> 1];
      while (left <= right) {
          while (array[left] < pivot) { left++; }
          while (array[right] > pivot) { right--; }
          if (left <= right) {
              var temp = array[left];
              array[left++] = array[right];
              array[right--] = temp;
          }
      }
      return left;
  }

  function quicksort(array, left, right) {
    //if the array has one element or fewer, return it
    if (testArray.length <= 1 ){
      return array
    }
    var mid = partition(array, left, right);
    if (left < mid - 1) {
        quicksort(array, left, mid - 1);
    }
    if (right > mid) {
        quicksort(array, mid, right);
    }
  }

  return function (items) {
      quicksort(items, 0, items.length - 1);
      return items;
  };
}());

console.log(quickmiddleSort(testArray))

//from: https://rawgit.com/escherba/algorithms-in-javascript/master/src/quickmiddle-sort.js
