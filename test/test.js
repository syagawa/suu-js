const assert = require('assert');
const app = require("../app.js");
const s = global.s;

describe('Array', function() {
  describe('#indexOf()', function() {
    it("test", () =>{
      const one = s.makeSu(1);
      assert.equal(one.getString(), "1");
    })
  });
});
