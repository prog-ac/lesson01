const num01 = process.argv[2];
const num02 = process.argv[3];
const sum = Math.floor(num01 / num02 * 100);
console.log(`${sum}%`);