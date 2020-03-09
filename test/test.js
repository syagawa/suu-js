const assert = require('assert');
const app = require("../app.js");
const s = global.s;

describe('Su', function() {
  describe('makeSu', function() {
    it("zero by string", () =>{
      const zero = s.makeSu("0");
      assert.equal(zero.getString(), "0");
    });
    it("zero by number", () =>{
      const zero = s.makeSu(0);
      assert.equal(zero.getString(), "0");
    });
    it("one by string", () =>{
      const one = s.makeSu("1");
      assert.equal(one.getString(), "1");
    });
    it("one by number", () =>{
      const one = s.makeSu(1);
      assert.equal(one.getString(), "1");
    });

    it("100.55533 by string", () =>{
      const one = s.makeSu("100.55533");
      assert.equal(one.getString(), "100.55533");
    });
    it("100.55533 by number", () =>{
      const one = s.makeSu(100.55533);
      assert.equal(one.getString(), "100.55533");
    });

    it("-1 by string", () =>{
      const one = s.makeSu("-1");
      assert.equal(one.getString(), "-1");
    });
    it("-1 by number", () =>{
      const one = s.makeSu(-1);
      assert.equal(one.getString(), "-1");
    });

    it("-100.55533 by string", () =>{
      const one = s.makeSu("-100.55533");
      assert.equal(one.getString(), "-100.55533");
    });
    it("-100.55533 by number", () =>{
      const one = s.makeSu(-100.55533);
      assert.equal(one.getString(), "-100.55533");
    });


  });
  describe('add', function() {
    it("1 + 1 = 2", () =>{
      const a = s.makeSu(1);
      const b = s.makeSu(1);
      assert.equal(a.add(b).getString(), "2");
    });
    it("1.5 + 1.5 = 3", () =>{
      const a = s.makeSu("1.5");
      const b = s.makeSu("1.5");
      assert.equal(a.add(b).getString(), "3");
    });

  });
});
