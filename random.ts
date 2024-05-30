import core from "./core";
import utils from "./utils";

import { SuuNumber } from "./interfaces";

const random:any = {};

random.getNotRandomNumber = () => {
  return core.getSuuNumber("1");
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};

random.getRandomNumberByMiddleSquareMethod = () => {
  const seed = "1234";
  const first = core.getSuuNumber(seed);
  const res = utils.square(first);
  let second = res.array.slice(2, 6).join("");
  if(res.array.length === 7){
    second = res.array.slice(1, 5).join("");
  }
  const secondnum = core.getSuuNumber(second);
  return secondnum;
};


export default random;