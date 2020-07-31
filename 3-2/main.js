const vertical = Number(process.argv[2]);
const horizontal = Number(process.argv[3]);

const shape = [];

for(let i = 0; i < vertical; i++){
  shape.push([]);

  if(i % 2 !== 0){
    for(let m = 0 ; m < horizontal ; m++){
      let a = m % 2 !== 0 ? '*' : '-';
      shape[i].push(a);
    }
  } else {
    for(let m = 0 ; m < horizontal ; m++){
      let b = m % 2 === 0 ? '*' : '-';
      shape[i].push(b);
    }
  }
}

console.table(shape);