const assert = require('assert');
const app = require("../app.js");
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it("test", () =>{
      const one = app.makeSu(1);
      assert.equal(one.getString(), "1");
    })
  });
});
