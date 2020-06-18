//1から50までの数字を表示する。ただし3と3の倍数のときだけWOWと表示する
for(i=1;i<51;i++){
  if(i%3===0 || String(i).match(/3/)){
    console.log('WOW')
  }else {
    console.log(i)
  }
}
