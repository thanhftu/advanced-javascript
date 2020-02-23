/*
- O(n)-> much better than O(2^n) of normal Fib
- use cache to save calculated number
*/

function memoizedFib(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    cache[index] =
      memoizedFib(index - 1, cache) + memoizedFib(index - 2, cache);
  }
  return cache[index];
}

console.log(memoizedFib(50));
