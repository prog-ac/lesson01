//コマンドライン引数で指定された整数を半径とした円の面積を求めよ。ただし円周率は3.14とする
const arg=process.argv[2]
const num=arg*arg*3.14
console.log(num)