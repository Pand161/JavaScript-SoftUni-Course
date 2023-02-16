const isOddOrEven = require('./isOddOrEven.js');
const expect = require('chai').expect;

describe('isOddOrEven  tests', () => {
  it('Should return undefined when passed paremeter is not a string', () => {
    let result = isOddOrEven(123);
    expect(result).to.be.undefined;
  });

  it('Should return even when string.length is even', () => {
    let even = isOddOrEven('12');
    expect(even).to.equal('even');
  });

  it('Should return odd when string.length is odd', () => {
    let odd = isOddOrEven('1');
    expect(odd).to.equal('odd');
  });
});
