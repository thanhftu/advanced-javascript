// O(n^2)
function twoSum(arr, sum) {
  sumPairs = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        sumPairs.push([arr[i], arr[j]]);
      }
    }
  }
  return sumPairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 5));
