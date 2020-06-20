const hour = Number(process.argv[2])

if(hour < 0) {
    console.log("ERROR")
}else if(hour < 24) {
    console.log(hour)
}else if(hour >= 24) {
    console.log(hour % 24)
}

