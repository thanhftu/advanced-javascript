/*
- O(logn) ->high performance for larger array
- Assume numArray is sorted
*/
function binarySearch(numArray, key) {
  const middleIndex = Math.floor(numArray.length / 2);
  if (numArray[middleIndex] === key) return true;
  else if (numArray[middleIndex] < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (numArray[middleIndex] > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else return false;
}
console.log(binarySearch([1, 2, 3, 4, 7, 8, 10], 8));
