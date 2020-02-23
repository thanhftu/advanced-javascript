// O(n)

function twoSum(numArray, sum) {
  const pairs = [];
  const hashTable = [];
  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 5));
