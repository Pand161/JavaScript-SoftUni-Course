function carFactory(obj) {
  function engineChooser(power) {
    let volume = 0;
    if (power <= 90) {
      power = 90;
      volume = 1800;
    } else if (obj.power <= 120) {
      power = 120;
      volume = 2400;
    } else {
      power = 200;
      volume = 3500;
    }

    return [power, volume];
  }

  let obj2 = {
    model: obj.model,
    engine: { power: 0, volume: 0 },
    carriage: { type: obj.carriage, color: obj.color },
    wheels: 0,
  };

  if (obj.wheelsize % 2 == 0) {
    obj.wheelsize -= 1;
  }

  obj2.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

  let [power, volume] = engineChooser(obj.power);

  obj2.engine.power = power;
  obj2.engine.volume = volume;
  return obj2;
}

carFactory({
  model: 'Ferrari',
  power: 200,
  color: 'red',
  carriage: 'coupe',
  wheelsize: 21,
});

carFactory({
  model: 'Opel Vectra',

  power: 110,

  color: 'grey',

  carriage: 'coupe',

  wheelsize: 17,
});
