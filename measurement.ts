import { SuuNumber } from "./interfaces";


const measurement = async function(func, ...args){
  const startTime = new Date().getTime();

  console.log(args);
  let res = null;
  try{
    if(Array.isArray(args)){
      if(func.constructor.name === "AsyncFunction"){
        res = await func(...args);
      }else{
        res = func(...args);
      }
    }else if(args !== null && typeof args === "object"){
      if(func.constructor.name === "AsyncFunction"){
        res = await func(args);
      }else{
        res = func(args);
      }
    }else{
      if(func.constructor.name === "AsyncFunction"){
        res = await func(args);
      }else{
        res = func(args);
      }
    }
  }catch(e){
    console.log(e);
  }

  const endTime = new Date().getTime();
  const lengthOfTime = endTime - startTime;

  return {
    result: res,
    lengthOfTimeMS: lengthOfTime,
  };

};


export default measurement;
