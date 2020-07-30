const yen100 = Math.floor(process.argv[2] / 100);

const yen10 = Math.floor((process.argv[2] - yen100 * 100) / 10);

const yen1 = Math.floor(process.argv[2] - yen100 * 100 - yen10 * 10);

console.log(`100円玉${yen100}枚, 10円玉${yen10}枚, 1円玉${yen1}枚`);