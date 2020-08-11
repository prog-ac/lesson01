const vertical = Number(process.argv[2]);
const horizontal = Number(process.argv[3]);

let table = [];


for(let i = 0 ,shape = ''; i < vertical; i++){
  table = [];
  if(i % 2 !== 0){
    for(let m = 0 ; m < horizontal ; m++){
      if(m % 2 !== 0){
        table.push('*');
      } else {
        table.push('-');
      }
    }
    console.log(table.join(''));
  } else {
    for(let m = 0 ; m < horizontal ; m++){
      if(m % 2 === 0){
        table.push('*');
      } else {
        table.push('-');
      }
    }
    console.log(table.join(''));
  }
}

