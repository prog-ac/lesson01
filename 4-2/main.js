for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 || Math.floor(i / 10) === 3 || i % 10 === 3) {
        console.log('WOW')
    } else {
        console.log(i)
    }
}