function caesarCipher(str, num) {
  num = num % 26;
  const lowerString = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";
  for (i = 0; i < lowerString.length; i++) {
    currentLetter = lowerString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    console.log(newIndex);
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
}

console.log(caesarCipher("BZQ", 1));
