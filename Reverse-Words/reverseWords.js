// O(n*m)
function reverseWords(str) {
  const wordsArr = str.split(" ");
  const reversedWordsArr = [];
  wordsArr.forEach(word => {
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(" ");
}

console.log(reverseWords("Thanh Love Sam"));
