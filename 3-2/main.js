const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])

for (let i = 0; i < arg1; i++) {
    if ((i % 2) === 0) {
        const even = "*-";
        if ((arg2 % 2) === 1) {
            console.log(`${even.repeat(arg2 / 2)}*`);
        } else {
            console.log(`${even.repeat(arg2 / 2)}`);
        }
    }
    else {
        const odd = "-*";
        if ((arg2 % 2) === 1) {
            console.log(`${odd.repeat(arg2 / 2)}-`);
        } else {
           console.log(`${odd.repeat(arg2 / 2)}`);
        }
    }
}