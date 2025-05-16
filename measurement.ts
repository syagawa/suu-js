import { SuuNumber } from "./interfaces";


const measurement = async function(func, args){
  const startTime = new Date().getTime();

  try{
    if(Array.isArray(args)){
      await func(...args);
    }else if(args !== null && typeof args === "object"){
      await func({...args});
    }else{
      await func(args);
    }
  }catch(e){
    console.log(e);
  }

  const endTime = new Date().getTime();
  const lengthOfTime = endTime - startTime;

  return {
    lengthOfTimeMS: lengthOfTime,
  };

};


export default measurement;
