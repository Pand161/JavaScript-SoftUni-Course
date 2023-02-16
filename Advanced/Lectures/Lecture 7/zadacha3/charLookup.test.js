const lookupChar = require('./charLookup');
const expect = require('chai').expect;

describe('charLookup tests', () => {
  it('Should be undefined', () => {
    const shouldBeUndefined = lookupChar(123, 123);
    const shouldBeUndefined2 = lookupChar('123', 'asdasd');
    const shouldBeUndefined3 = lookupChar('123', 1.00001);

    expect(shouldBeUndefined).to.be.undefined;
    expect(shouldBeUndefined2).to.be.undefined;
    expect(shouldBeUndefined3).to.be.undefined;
  });

  it('incorrect index', () => {
    const incorrectIndex = lookupChar('asd', -99);
    const incorrectIndex3 = lookupChar('asd', 6);

    expect(incorrectIndex).to.equal('Incorrect index');
    expect(incorrectIndex3).to.equal('Incorrect index');
  });

  it('correct data', () => {
    const correctData = lookupChar('asd', 2);
    const correctData2 = lookupChar('asdasdasd', 4);

    expect(correctData).to.equal('d');
    expect(correctData2).to.equal('s');
  });
});
