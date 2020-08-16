const str = "こはるはるここはるここはるはるここはるこはるはるはる";

const searchingWord = `こはる`;
const searchingWord2 = `はるこ`;
const searchingWordCount = searchingWord.length;
let counts = 0;
let counts2 = 0;

for (let i = 0; i < str.length; i++) {
  let selectingWord = str[i];
  for (let a = 1; a < searchingWordCount; a++) {
    selectingWord += str[i + a];
  }
  if (selectingWord == searchingWord) {
    counts++;
  } else if (selectingWord == searchingWord2) {
    counts2++;
  }
}
console.log(`こはる：${counts}\nはるこ:${counts2}`);
