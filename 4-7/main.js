//１つ目のコマンドライン引数を配列に変換し、２つ目のコマンドライン引数が含まれているもの(ただし大文字小文字の区別しない)だけの配列にしてください。また、アルファベット順に並べて全て小文字で表示してください。
const arg1 = process.argv[2]
const arg2 = process.argv[3]
const array = arg1.split(',')

const result = array.filter(word =>
  word.toLowerCase().indexOf(arg2) !== -1);
result.sort()
const result1 = result.join(' ')
console.log(result1.toLowerCase())
