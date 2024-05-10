const app = require("./app.js");

let counter = 0;

const funcs = {

  "add": {
    "suu":  function(){
      for(let i = 0; i < 100; i++){
        app.core.add("1", "1");
      }
    },
    "native": function(){
  
      for(let i = 0; i < 100; i++){
        1 + 1;
      }
    },
  }
};



const execute = function(func, name){
  counter++;
  const id = name;
  performance.mark("testStart");
  func();
  performance.mark("testEnd");

  performance.measure(
    id,
    "testStart",
    "testEnd",
  );

  const results = performance.getEntriesByName(id);

  console.log(results[0]);
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