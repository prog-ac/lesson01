const tate = Number(process.argv[2])
const yoko = Number(process.argv[3])


const a = '*'
const b = '-'

for (let j = 1; j <= tate; j++) {
    const array = []
    for (let i = 1; i <= yoko; i++) {
        if (j % 2 !== 0) {
            if (i % 2 !== 0) {
                array.push(a)
            } else if (i % 2 === 0) {
                array.push(b)
            }
        } else {
            if (j % 2 === 0) {
                if (i % 2 !== 0) {
                    array.push(b)
                } else if (i % 2 === 0) {
                    array.push(a)
                }
            }
        }
    }
    console.log(array.join(''))
}