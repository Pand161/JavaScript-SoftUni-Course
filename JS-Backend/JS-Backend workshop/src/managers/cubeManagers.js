const Cube = require('../models/Cube');

exports.create = async (cubeData) => {
  const cube = new Cube(cubeData);
  await cube.save();
  return cube;
};

exports.getCubeById = (id) => Cube.findById(id).populate('accessories');

exports.update = async (cubeId, cubeData) =>
  await Cube.findByIdAndUpdate(cubeId, cubeData);

exports.deleteById = async (cubeId) => await Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessory) => {
  const cube = await Cube.findById(cubeId);
  cube.accessories.push(accessory);

  return cube.save();
};

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  if (search) {
    result = result.filter((cubes) =>
      cubes.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    result = result.filter(
      (cubes) => Number(cubes.difficultyLevel) >= Number(from)
    );
  }

  if (to) {
    result = result.filter(
      (cubes) => Number(cubes.difficultyLevel) <= Number(to)
    );
  }

  return result;
};
