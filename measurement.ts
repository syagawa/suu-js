import { SuuNumber } from "./interfaces";


const measurement = async function(func, ...args){
  const startTime = new Date().getTime();

  console.log(args);
  let res = null;
  try{
    if(Array.isArray(args)){
      res = await func(...args);
    }else if(args !== null && typeof args === "object"){
      res = await func(args);
    }else{
      res = await func(args);
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
