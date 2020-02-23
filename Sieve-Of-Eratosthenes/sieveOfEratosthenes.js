function sieveOfEratosthenes(number) {
  const dpArr = new Array(number + 1).fill(true);
  dpArr[0] = false;
  dpArr[1] = false;
  const primeNums = [];
  for (i = 2; i <= Math.sqrt(number); i++) {
    for (j = 2; j * i <= number; j++) {
      dpArr[i * j] = false;
    }
  }
  for (i = 0; i <= number + 1; i++) {
    if (dpArr[i]) primeNums.push(i);
  }
  return primeNums;
}

console.log(sieveOfEratosthenes(20));
