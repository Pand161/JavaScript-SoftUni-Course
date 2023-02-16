const companyAdministration = require('./companyAdministration');
const assert = require('chai').assert;

describe('All Tests', () => {
  it('hiringEmployee Tests', () => {
    assert.throw(
      () => companyAdministration.hiringEmployee('asd', 'asd', 123),
      'We are not looking for workers for this position.'
    );

    assert.equal(
      companyAdministration.hiringEmployee('Vlad', 'Programmer', 3),
      'Vlad was successfully hired for the position Programmer.'
    );

    assert.equal(
      companyAdministration.hiringEmployee('Vlad', 'Programmer', 4),
      'Vlad was successfully hired for the position Programmer.'
    );

    assert.equal(
      companyAdministration.hiringEmployee('Vlad', 'Programmer', 2),
      'Vlad is not approved for this position.'
    );
  });

  it('calculateSalary Tests', () => {
    assert.throw(
      () => companyAdministration.calculateSalary('asd'),
      'Invalid hours'
    );

    assert.throw(
      () => companyAdministration.calculateSalary(-1),
      'Invalid hours'
    );

    assert.equal(companyAdministration.calculateSalary(10), 150);
    assert.equal(companyAdministration.calculateSalary(0), 0);
    assert.equal(companyAdministration.calculateSalary(161), 3415);
  });

  it('firedEmployee Tests', () => {
    assert.throw(
      () => companyAdministration.firedEmployee(false, 1),
      'Invalid input'
    );

    assert.throw(
      () => companyAdministration.firedEmployee('Pesho', 0),
      'Invalid input'
    );

    assert.throw(
      () => companyAdministration.firedEmployee(['Pesho'], 2),
      'Invalid input'
    );

    assert.throw(
      () =>
        companyAdministration.firedEmployee(
          ['Pesho', 'Pesho', 'Pesho', 'Pesho'],
          2.56
        ),
      'Invalid input'
    );

    assert.throw(
      () => companyAdministration.firedEmployee(['Pesho'], false),
      'Invalid input'
    );

    assert.throw(
      () => companyAdministration.firedEmployee(['petar'], 1),
      'Invalid input'
    );

    assert.throw(
      () => companyAdministration.firedEmployee(['petar'], -1),
      'Invalid input'
    );

    assert.equal(
      companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 2),
      'Petar, Ivan'
    );

    assert.equal(
      companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 0),
      'Ivan, George'
    );

    assert.equal(
      companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1),
      'Petar, George'
    );
  });
});
