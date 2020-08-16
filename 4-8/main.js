const str = "こはるはるここはるここはるはるここはるこはるはるはる";

const word = `こはる`;
const word2 = `はるこ`;
const number = `こはる`.length;
let counts = 0;
let counts2 = 0;

for (let i = 0; i < str.length; i++) {
  let str2 = str[i];
  for (let a = 1; a < number; a++) {
    str2 += str[i + a];
  }
  if (str2 == word) {
    counts++;
  } else if (str2 == word2) {
    counts2++;
  }
}
console.log(`こはる：${counts}\nはるこ:${counts2}`);
