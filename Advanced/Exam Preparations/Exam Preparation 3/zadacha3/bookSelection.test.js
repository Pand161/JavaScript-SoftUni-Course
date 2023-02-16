const bookSelection = require('./bookSelection');
const assert = require('chai').assert;

describe('All Tests', () => {
  it('isGenreSuitable tests', () => {
    assert.equal(
      bookSelection.isGenreSuitable('Thriller', 12),
      'Books with Thriller genre are not suitable for kids at 12 age'
    );

    assert.equal(
      bookSelection.isGenreSuitable('Horror', 12),
      'Books with Horror genre are not suitable for kids at 12 age'
    );

    assert.equal(
      bookSelection.isGenreSuitable('Horror', 11),
      'Books with Horror genre are not suitable for kids at 11 age'
    );

    assert.equal(
      bookSelection.isGenreSuitable('Thriller', 13),
      'Those books are suitable'
    );

    assert.equal(
      bookSelection.isGenreSuitable('Horror', 13),
      'Those books are suitable'
    );
  });

  it('isItAffordable tests', () => {
    assert.throw(() => bookSelection.isItAffordable(10, true), 'Invalid input');
    assert.throw(() => bookSelection.isItAffordable(true, 10), 'Invalid input');
    assert.equal(
      bookSelection.isItAffordable(10, 9),
      "You don't have enough money"
    );

    assert.equal(
      bookSelection.isItAffordable(10, 10),
      'Book bought. You have 0$ left'
    );
  });

  it('suitableTitles tests', () => {
    assert.throw(
      () => bookSelection.suitableTitles(undefined, 'asdsad'),
      'Invalid input'
    );
    assert.throw(
      () => bookSelection.suitableTitles(['Pesho'], undefined),
      'Invalid input'
    );

    assert.equal(
      bookSelection.suitableTitles(
        [{ genre: 'Pesho', title: 'Pesho 2 the return' }],
        'Pesho'
      ),
      'Pesho 2 the return'
    );

    assert.deepEqual(
      bookSelection.suitableTitles(
        [{ genre: 'Pesho', title: 'Pesho 2 the return' }],
        'Pesho123'
      ),
      []
    );

    assert.deepEqual(
      bookSelection.suitableTitles(
        [
          { genre: 'Pesho', title: 'Pesho 2 the return' },
          { genre: 'Pesho', title: 'Pesho 3 the return' },
          { genre: 'Pesho', title: 'Pesho 4 the return' },
        ],
        'Pesho'
      ),
      ['Pesho 2 the return', 'Pesho 3 the return', 'Pesho 4 the return']
    );
  });
});
