const PaymentPackage = require('./paymentPackage');
const expect = require('chai').expect;

describe('PaymentPackage tests', () => {
  it('Name Tests', () => {
    let testClass2 = new PaymentPackage('Asen', 10);

    expect(() => (testClass2.name = 123)).to.throw(
      Error,
      'Name must be a non-empty string'
    );

    expect(() => (testClass2.name = '')).to.throw(
      Error,
      'Name must be a non-empty string'
    );

    expect(() => (testClass2.name = false)).to.throw(
      Error,
      'Name must be a non-empty string'
    );
  });

  it('Value Tests', () => {
    let testClass2 = new PaymentPackage('Asen', 10);
    expect(() => (testClass2.value = -5)).to.throw(
      Error,
      'Value must be a non-negative number'
    );

    expect(() => (testClass2.value = 'asd')).to.throw(
      Error,
      'Value must be a non-negative number'
    );

    expect(() => (testClass2.value = true)).to.throw(
      Error,
      'Value must be a non-negative number'
    );

    expect(() => (testClass2.value = -1)).to.throw(
      Error,
      'Value must be a non-negative number'
    );
  });

  it('Vat Tests', () => {
    let testClass2 = new PaymentPackage('Asen', 10);

    expect(() => (testClass2.VAT = 'asd')).to.throw(
      Error,
      'VAT must be a non-negative number'
    );

    expect(() => (testClass2.VAT = -1)).to.throw(
      Error,
      'VAT must be a non-negative number'
    );
  });

  it('Active Tests', () => {
    let testClass2 = new PaymentPackage('Asen', 10);

    expect(() => (testClass2.active = 'asd')).to.throw(
      Error,
      'Active status must be a boolean'
    );
  });

  it('toString Tests', () => {
    let testClass2 = new PaymentPackage('Asen', 10);

    expect(testClass2.toString()).to.equal(
      [
        `Package: ${testClass2.name}` +
          (testClass2.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${testClass2.value}`,
        `- Value (VAT ${testClass2.VAT}%): ${
          testClass2.value * (1 + testClass2.VAT / 100)
        }`,
      ].join('\n')
    );

    testClass2.active = false;

    expect(testClass2.toString()).to.equal(
      [
        `Package: ${testClass2.name}` +
          (testClass2.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${testClass2.value}`,
        `- Value (VAT ${testClass2.VAT}%): ${
          testClass2.value * (1 + testClass2.VAT / 100)
        }`,
      ].join('\n')
    );
  });

  it('return Tests', () => {
    let testClass = new PaymentPackage('Bojko', 15);
    let testClass2 = new PaymentPackage('a', 0);

    expect((testClass2.name = 'b')).to.equal('b');

    expect(testClass.name).to.equal('Bojko');
    testClass.name = 'Boris';
    expect(testClass.name).to.equal('Boris');

    expect(testClass.value).to.equal(15);

    expect((testClass.value = 0)).to.equal(0);

    expect(testClass.VAT).to.equal(20);

    expect((testClass.VAT = 0)).to.equal(0);

    expect(testClass.active).to.equal(true);

    expect((testClass.active = false)).to.equal(false);
  });
});
