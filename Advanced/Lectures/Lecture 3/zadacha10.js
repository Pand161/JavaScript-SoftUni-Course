function solve() {
  let obj = {
    mage: function (name) {
      let obj1 = {
        name: name,
        health: 100,
        mana: 100,
        cast: function (spell) {
          obj1.mana--;
          console.log(`${name} cast ${spell}`);
        },
      };

      return obj1;
    },
    fighter: function (name) {
      let obj1 = {
        name: name,
        health: 100,
        stamina: 100,
        fight: function (spell) {
          obj1.stamina--;
          console.log(`${name} slashes at the foe!`);
        },
      };

      return obj1;
    },
  };

  return obj;
}

let create = solve();

const scorcher = create.mage('Scorcher');

scorcher.cast('fireball');

scorcher.cast('thunder');

scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');

scorcher2.fight();

console.log(scorcher2.stamina);

console.log(scorcher.mana);
