const money = Number(process.argv[2])

const a = Math.floor(money / 100)
const b = Math.floor((money - a * 100) / 10)
const c = money - a * 100 - b * 10

console.log('100円玉' + a + '枚, 10円玉' + b + '枚, 1円玉' + c + '枚')