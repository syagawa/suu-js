import core from "./core";

import { SuuNumber } from "./interfaces";

const random:any = {};

random.getNotRandomNumber = () => {
  return core.numToArrayWithDecimal("1");
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};


export default random;