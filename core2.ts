const matrix01 = [
  ["0","0","0"],["0","1","1"],["1","0","1"],["1","1","10"],
];

const seek = (a, b, c, matrix) => {
  let filtered = [];
  const result = {
    a,
    b,
    c
  };
  if(a){
    filtered = matrix.filter(array => {
      return array[0] === a ? true : false;
    });
    if(filtered.length > 0){
      if(b){
        filtered = filtered.filter(array => {
          return array[1] === b ? true : false;
        });
      }else if(c){
        filtered = filtered.filter(array => {
          return array[2] === c ? true : false;
        });
      }
    }
  }
  if(b){
    filtered = matrix.filter(array => {
      return array[1] === b ? true : false;
    });
    if(filtered.length > 0){
      if(a){
        filtered = filtered.filter(array => {
          return array[0] === a ? true : false;
        });
      }else if(c){
        filtered = filtered.filter(array => {
          return array[2] === c ? true : false;
        });
      }
    }
  }
  if(c){
    filtered = matrix.filter(array => {
      return array[2] === c ? true : false;
    });
    if(filtered.length > 0){
      if(a){
        filtered = filtered.filter(array => {
          return array[0] === a ? true : false;
        });
      }else if(b){
        filtered = filtered.filter(array => {
          return array[1] === b ? true : false;
        });
      }
    }
  }

  if(result.a && result.b){
    result.c = filtered[0][2];
  }else if(result.a && result.c){
    result.b = filtered[0][1];
  }else if(result.b && result.c){
    result.a = filtered[0][0];
  }

  return result;

};

const addAndSubtract01 = (a, b, add) => {
  if(add){
    // +
    const result = seek(a, b, null, matrix01);
    return result.c;
  }else{
    // -

  }


};


// console.log(addAndSubtract01("0", "0", true));
// console.log(addAndSubtract01("1", "0", true));
// console.log(addAndSubtract01("0", "1", true));
// console.log(addAndSubtract01("1", "1", true));
