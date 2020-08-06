//1から50まで表示する
for (i = 0; i < 50; i++) {
  //  console.log(i + 1);
  const str = String(i + 1);
  //3の倍数と3がつく数字にWOWを表示する
  if ((i + 1) % 3 === 0 || str.includes(`3`)) {
    console.log(`WOW`);
  } else {
    console.log(i + 1);
  }
}
//test
