const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe('Math Enforcer', () => {
  describe('addFive', () => {
    it('Should be undefined', () => {
      const shouldBeUndefined = mathEnforcer.addFive(true);
      expect(shouldBeUndefined).to.be.undefined;
    });

    it('should add five', () => {
      const num = mathEnforcer.addFive(5.01);
      expect(num).to.equal(10.01);

      const num3 = mathEnforcer.addFive(-10);
      expect(num3).to.equal(-5);

      const num2 = mathEnforcer.addFive(-10.01);
      console.log(num2);
      expect(num2).to.equal(-5.01);
    });
  });

  describe('subtractTen', () => {
    it('should be undefined', () => {
      const shouldBeUndefined = mathEnforcer.subtractTen(true);
      expect(shouldBeUndefined).to.be.undefined;
    });

    it('should subtract ten', () => {
      const num = mathEnforcer.subtractTen(10);
      const num2 = mathEnforcer.subtractTen(10.01);
      const num3 = mathEnforcer.subtractTen(-0.01);

      console.log(num2);
      expect(num3).to.equal(-10.01);
      expect(num2).to.be.closeTo(0.01, 0.001);
      expect(num).to.equal(0);
    });
  });

  describe('sum', () => {
    it('should return undefined', () => {
      const shouldBeUndefined = mathEnforcer.sum(true, 123);
      const shouldBeUndefined2 = mathEnforcer.sum(123, false);
      const shouldBeUndefined3 = mathEnforcer.sum(true, false);

      expect(shouldBeUndefined).to.be.undefined;
      expect(shouldBeUndefined2).to.be.undefined;
      expect(shouldBeUndefined3).to.be.undefined;
    });

    it('should return sum of 2 numbers', () => {
      const num = mathEnforcer.sum(5, 5);
      const num1 = mathEnforcer.sum(-10, 5);
      const num2 = mathEnforcer.sum(-10, -5);
      const num3 = mathEnforcer.sum(10.001, 5.01);

      expect(num).to.equal(10);
      expect(num1).to.equal(-5);
      expect(num2).to.equal(-15);
      expect(num3).to.equal(15.011);
    });
  });
});
