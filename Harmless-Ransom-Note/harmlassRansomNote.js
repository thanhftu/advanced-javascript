// Time complexity: O(n)

function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let isPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        isPossible = false;
        return;
      }
    } else {
      isPossible = false;
      return;
    }
  });
  return isPossible;
}
console.log(
  harmlessRansomNote("this all all", "this is all the magazine has in magazine")
);
