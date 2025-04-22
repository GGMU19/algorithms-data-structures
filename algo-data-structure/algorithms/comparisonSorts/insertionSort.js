// Big O time complexity is O(n^2) in the worst and average cases, and O(n) in the best case when the array is already sorted.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    //using var for function scope to access J
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
