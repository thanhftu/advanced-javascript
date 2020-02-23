function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    modes: getMode(arr)
  };
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 1]));
function getMean(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getMedian(arr) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let median = 0;
  let mid = 0;
  if (len % 2 === 0) {
    mid = len / 2;
    median = (arr[mid] + arr[mid - 1]) / 2;
  } else {
    mid = (len - 1) / 2;
    median = arr[mid];
  }
  return median;
}

function getMode(arr) {
  const modeObj = {};
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      maxFrequency = modeObj[num];
      modes = [num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}
