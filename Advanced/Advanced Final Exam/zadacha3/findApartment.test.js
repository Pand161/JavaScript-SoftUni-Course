const findNewApartment = require('./findApartment');
const assert = require('chai').assert;

describe('All tests', () => {
  it('isGoodLocation test', () => {
    assert.throw(
      () => findNewApartment.isGoodLocation(213, true),
      'Invalid input!'
    );

    assert.throw(
      () => findNewApartment.isGoodLocation('asd', 123),
      'Invalid input!'
    );

    assert.throw(() => findNewApartment.isGoodLocation(), 'Invalid input!');

    assert.equal(
      findNewApartment.isGoodLocation('asdd', true),
      'This location is not suitable for you.'
    );

    assert.equal(
      findNewApartment.isGoodLocation('asdd', false),
      'This location is not suitable for you.'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Sofia', false),
      'There is no public transport in area.'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Plovdiv', false),
      'There is no public transport in area.'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Varna', false),
      'There is no public transport in area.'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Sofia', true),
      'You can go on home tour!'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Plovdiv', true),
      'You can go on home tour!'
    );

    assert.equal(
      findNewApartment.isGoodLocation('Varna', true),
      'You can go on home tour!'
    );
  });

  it('isLargeEnough test', () => {
    assert.throw(
      () => findNewApartment.isLargeEnough([], 25),
      'Invalid input!'
    );

    assert.throw(
      () => findNewApartment.isLargeEnough('idk', 25),
      'Invalid input!'
    );

    assert.throw(
      () => findNewApartment.isLargeEnough([25, 384], false),
      'Invalid input!'
    );

    assert.equal(findNewApartment.isLargeEnough([25, 36], NaN), '');

    assert.equal(
      findNewApartment.isLargeEnough([25, 36, 15, 23], 20),
      '25, 36, 23'
    );

    assert.equal(
      findNewApartment.isLargeEnough([25, 36, 15, 23, 20], 20),
      '25, 36, 23, 20'
    );

    assert.equal(
      findNewApartment.isLargeEnough([25, 36, 1.5], 1.5),
      '25, 36, 1.5'
    );
  });

  it('isItAffordable test', () => {
    assert.throw(() => findNewApartment.isItAffordable(0, 1), 'Invalid input!');
    assert.throw(
      () => findNewApartment.isItAffordable(-1, 1),
      'Invalid input!'
    );

    assert.throw(() => findNewApartment.isItAffordable(1, 0), 'Invalid input!');
    assert.throw(
      () => findNewApartment.isItAffordable(1, -1),
      'Invalid input!'
    );

    assert.throw(
      () => findNewApartment.isItAffordable('219', 1),
      'Invalid input!'
    );

    assert.throw(
      () => findNewApartment.isItAffordable(123, '3198'),
      'Invalid input!'
    );

    assert.equal(
      findNewApartment.isItAffordable(1, 1),
      'You can afford this home!'
    );

    assert.equal(
      findNewApartment.isItAffordable(1, 25),
      'You can afford this home!'
    );

    assert.equal(
      findNewApartment.isItAffordable(26, 25),
      "You don't have enough money for this house!"
    );
  });
});
