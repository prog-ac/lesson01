const vertical = Number(process.argv[2]);
const horizontal = Number(process.argv[3]);



for(let i = 0 , shape = ''; i < vertical; i++){

  if(i % 2 !== 0){
    for(let m = 0 ; m < horizontal ; m++){
      shape += m % 2 !== 0 ? '*' : '-';
    }
    console.log(shape);
  } else {
    for(let m = 0 ; m < horizontal ; m++){
      shape += m % 2 === 0 ? '*' : '-';
    }
    console.log(shape);
  }
}

