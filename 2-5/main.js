const sum = process.argv[2]

    const hundredsPlace = Math.floor(sum / 100)
    const tensPlace = Math.floor(sum % 100 / 10)
    const onesPlace = sum % 100 % 10

console.log(`100円玉${hundredsPlace}枚、10円玉${tensPlace}枚、1円玉${onesPlace}枚`)