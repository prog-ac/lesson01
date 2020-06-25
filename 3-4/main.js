const a = process.argv[2]
const b = process.argv[3]

function reversed(word) {
    //wordを一文字ずつforループで見てconvert配列に入れる
    const convert = []
    for (let ch of word) {
        convert.unshift(ch)
    }
    //convert配列を文字列としてくっつける
    let reverse = ''
    for (let ch of convert) {
        reverse += ch
    }
    return reverse
}

//文字列としてひっくり返したのでNumber型に変換
const numa = Number(reversed(a))
const numb = Number(reversed(b))

console.log(numa + numb)