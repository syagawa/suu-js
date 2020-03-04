const assert = require('assert');
const app = require("../app.js");
const s = global.s;

describe('Su', function() {
  describe('makeSu', function() {
    it("zero", () =>{
      const zero = s.makeSu(0);
      assert.equal(zero.getString(), "0");
    });
    it("one", () =>{
      const one = s.makeSu(1);
      assert.equal(one.getString(), "1");
    });
  });
  describe('add', function() {
    it("1 + 1 = 2", () =>{
      const a = s.makeSu(1);
      const b = s.makeSu(1);
      assert.equal(a.add(b).getString(), "2");
    })
  });
});
