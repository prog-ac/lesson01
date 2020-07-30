const time = process.argv[2];

if ( time % 24 < 0 ){
  console.log(time + '時');
} else {
  console.log(time % 24 + '時');
}