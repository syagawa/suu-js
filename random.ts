import core from "./core";

import { SuuNumber } from "./interfaces";

const random:any = {};

random.getNotRandom = (seed: any) => {
  return seed;
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};


export default random;