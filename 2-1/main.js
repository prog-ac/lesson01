//コマンドライン引数で２つの数字を受け取り、前者の値が後者の何％であるか表示する
const arg1=process.argv[2]
const arg2=process.argv[3]
const num=arg1/arg2*100
console.log(num+'%')
