const num = process.argv.slice(2)
function compareFunc(a, b) {
    return b - a;
}
const newArr = []
for (i = 0; i < num.length; i++) {
    const test = Number(num[i])
    newArr.push(test)
}

newArr.sort(compareFunc)

console.log(newArr[2])

