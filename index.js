import s from "./su.js";
import SK from "./SK.js";

(function(global, s){
  global.s = s;
  global.K = SK.K;
})(global || self, s);