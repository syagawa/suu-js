const app = require("./app.js");

let counter = 0;

const funcs = {

  "add": {
    "suu":  function(a, b, loopCount){
      const a_ = String(a);
      const b_ = String(b);
      for(let i = 0; i < loopCount; i++){
        app.core.add(a_, b_);
      }
    },
    "native": function(a, b, loopCount){
      const a_ = Number(a);
      const b_ = Number(b);
      for(let i = 0; i < loopCount; i++){
        a_ + b_;
      }
    },
  },
  "subtract": {
    "suu":  function(a, b, loopCount){
      const a_ = String(a);
      const b_ = String(b);
      for(let i = 0; i < loopCount; i++){
        app.core.subtract(a_, b_);
      }
    },
    "native": function(a, b, loopCount){
      const a_ = Number(a);
      const b_ = Number(b);
      for(let i = 0; i < loopCount; i++){
        a_ + b_;
      }
    },
  },
  "multiplication": {
    "suu":  function(a, b, loopCount){
      const a_ = String(a);
      const b_ = String(b);
      for(let i = 0; i < loopCount; i++){
        app.core.multiplication(a_, b_);
      }
    },
    "native": function(a, b, loopCount){
      const a_ = Number(a);
      const b_ = Number(b);
      for(let i = 0; i < loopCount; i++){
        a_ * b_;
      }
    },
  },
  "division": {
    "suu":  function(a, b, loopCount){
      const a_ = String(a);
      const b_ = String(b);
      for(let i = 0; i < loopCount; i++){
        app.core.division(a_, b_);
      }
    },
    "native": function(a, b, loopCount){
      const a_ = Number(a);
      const b_ = Number(b);
      for(let i = 0; i < loopCount; i++){
        a_ / b_;
      }
    },
  },
};

const results = [];
const showResults = function(results){

  for(let i = 0; i < results.length; i++){
    const result = results[i];
    console.log(`${result.name}: ${result.duration}ms`);
  }

  const results2 = [...results];

  results2.sort((a, b) => {
    const a_d = a.duration;
    const b_d = b.duration;
    if(a_d > b_d){
      return 1;
    }else if(a_d < b_d){
      return -1;
    }else{
      return 0;
    }
  });

  for(let i = 0; i < results2.length; i++){
    const result = results2[i];
    console.log(`${i + 1} ${result.name}: ${result.duration}ms`);
  }

};


const execute = function({func, name, a, b, loopCount}){
  counter++;
  const id = `${name}-loop_count_${String(loopCount)}`;
  performance.mark("testStart");
  func(a, b, loopCount);
  performance.mark("testEnd");

  performance.measure(
    id,
    "testStart",
    "testEnd",
  );

  const result = performance.getEntriesByName(id);

  results.push(result[0]);
  // console.log(`${result[0].name}: ${result[0].duration}ms`);
};

const main = function(obj){

  const argv = process.argv;
  const a_ = Number(argv[2]);
  const b_ = Number(argv[3]);
  const loopCount_ = Number(argv[4]);

  const a = a_ ? String(a_) : "1";
  const b = b_ ? String(b_) : "1";

  const loopCount = loopCount_ ? loopCount_ : 100;

  let count = 0;
  for(let targetname in obj){
    const target = obj[targetname];
    for(let key in target){
      count++;
      const name = `${targetname}-${key}-${count}`;
      const func = target[key];
      execute({func, name, a, b, loopCount});
    }
  }

  showResults(results);

};


main(funcs);