const assert = require('assert');
const drones = require('./index.js');

describe('test drone-route', function () {
  it('should return 33N 51E 14N when the input is 55 33E L 33E MMRMMRMRRM 12N LMLMLMLMMLMLMLMLMM', function () {
    assert.equal('33N 51E 14N', drones('55 33E L 33E MMRMMRMRRM 12N LMLMLMLMMLMLMLMLMM'));
  });
});