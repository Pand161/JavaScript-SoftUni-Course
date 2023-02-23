const testNumbers = require('./testNumbers');
const assert = require('chai').assert;

describe('All tests', () => {
  it('sumNumbers tests', () => {
    assert.equal(testNumbers.sumNumbers('neshto si', 123), undefined);
    assert.equal(testNumbers.sumNumbers(123, 'neshto si'), undefined);
    assert.equal(testNumbers.sumNumbers('neshto si', 'pesho'), undefined);

    assert.equal(testNumbers.sumNumbers(1, 123), 124.0);
    assert.equal(testNumbers.sumNumbers(25.25, 15.13), 40.38);
    assert.equal(testNumbers.sumNumbers(0, -1), -1.0);
  });

  it('numberChecker tests', () => {
    assert.throw(
      () => testNumbers.numberChecker('pesho'),
      'The input is not a number!'
    );

    assert.throw(
      () => testNumbers.numberChecker(NaN),
      'The input is not a number!'
    );

    assert.equal(testNumbers.numberChecker(0), 'The number is even!');
    assert.equal(testNumbers.numberChecker(-2), 'The number is even!');
    assert.equal(testNumbers.numberChecker(2), 'The number is even!');

    assert.equal(testNumbers.numberChecker(2.2), 'The number is odd!');
    assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
    assert.equal(testNumbers.numberChecker(0.392671), 'The number is odd!');
    assert.equal(testNumbers.numberChecker(-1), 'The number is odd!');
  });

  it('averageSumArray tests', () => {
    assert.deepEqual(testNumbers.averageSumArray([]), NaN);
    assert.equal(testNumbers.averageSumArray([0]), 0);
    assert.equal(testNumbers.averageSumArray([1, 2, 3, 4]), 2.5);
  });
});
