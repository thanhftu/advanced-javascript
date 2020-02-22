// time complexity O(n)
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    }
    if (s[left] !== s[right]) return false;
  }
  return true;
}

console.log(isPalindrome("thanh hna__hts"));

/*
other solution:
check whether string is equal reverse_string using function reverse()
*/
