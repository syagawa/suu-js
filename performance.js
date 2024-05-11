const app = require("./app.js");

let counter = 0;

const funcs = {

  "add": {
    "suu":  function(loopCount){
      for(let i = 0; i < loopCount; i++){
        app.core.add("1", "1");
      }
    },
    "native": function(loopCount){
      for(let i = 0; i < loopCount; i++){
        1 + 1;
      }
    },
  },
  "subtract": {
    "suu":  function(loopCount){
      for(let i = 0; i < loopCount; i++){
        app.core.subtract("1", "1");
      }
    },
    "native": function(loopCount){
      for(let i = 0; i < loopCount; i++){
        1 - 1;
      }
    },
  },
};



const execute = function(func, name){
  counter++;
  const loopCount = 100;
  const id = `${name}-loop_count_${String(loopCount)}`;
  performance.mark("testStart");
  func(loopCount);
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

  let count = 0;
  for(let targetname in obj){
    const target = obj[targetname];
    for(let key in target){
      count++;
      const name = `${targetname}-${key}-${count}`;
      const func = target[key];
      execute(func, name);
    }
  }


};


main(funcs);