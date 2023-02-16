const assert = require('chai').assert;
const flowerShop = require('./flowerShop');

describe('All tests', function () {
  it('Should return Error(Invalid input!)', function () {
    assert.throw(() => flowerShop.calcPriceOfFlowers(), 'Invalid input!');
    assert.throw(
      () => flowerShop.calcPriceOfFlowers(123, 123, 123),
      'Invalid input!'
    );
    assert.throw(
      () => flowerShop.calcPriceOfFlowers('flower', undefined, 123),
      'Invalid input!'
    );
    assert.throw(
      () => flowerShop.calcPriceOfFlowers('kokiche', 123, undefined),
      'Invalid input!'
    );
  });

  it('Should return price', function () {
    assert.equal(
      flowerShop.calcPriceOfFlowers('kokiche', 10, 10),
      'You need $100.00 to buy kokiche!'
    );
    assert.equal(
      flowerShop.calcPriceOfFlowers('kokiche', -10, 10),
      'You need $-100.00 to buy kokiche!'
    );
  });

  it('Check Flowers tests', () => {
    assert.equal(
      flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']),
      'The Rose are available!'
    );

    assert.equal(
      flowerShop.checkFlowersAvailable('Pesho', ['Rose', 'Lily', 'Orchid']),
      'The Pesho are sold! You need to purchase more!'
    );
  });

  it('SellFlowers Tests', () => {
    assert.throw(() => flowerShop.sellFlowers(), 'Invalid input!');
    assert.throw(() => flowerShop.sellFlowers([], 0), 'Invalid input!');
    assert.throw(() => flowerShop.sellFlowers(['Pesho'], 2), 'Invalid input!');
    assert.throw(() => flowerShop.sellFlowers(['Pesho'], -1), 'Invalid input!');
    assert.throw(() => flowerShop.sellFlowers(true, 2), 'Invalid input!');
    assert.throw(
      () => flowerShop.sellFlowers(['Pesho'], false),
      'Invalid input!'
    );
    assert.throw(() => flowerShop.sellFlowers(['Pesho'], 1), 'Invalid input!');
  });

  it('Should return strings', () => {
    assert.equal(
      flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2),
      'Rose / Lily'
    );
    assert.equal(
      flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0),
      'Lily / Orchid'
    );
    assert.equal(
      flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1),
      'Rose / Orchid'
    );
  });
});
