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

  const results = performance.getEntriesByName(id);

  console.log(`${results[0].name}: ${results[0].duration}ms`);
};

const main = function(obj){

  const argv = process.argv;
  const a_ = Number(process.argv[2]);
  const b_ = Number(process.argv[3]);
  const loopCount_ = Number(process.argv[4]);

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


};


main(funcs);