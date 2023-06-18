const Animal = require('../models/Animal');

exports.getAllAnimals = async () => await Animal.find().lean();

exports.getAnimalById = async (animalId) =>
  await Animal.findById(animalId).lean();

exports.createAnimal = async (animalData) => await Animal.create(animalData);

exports.donateAnimal = async (animalId, userId) =>
  await Animal.findByIdAndUpdate(
    animalId,
    { $push: { donations: userId } },
    { new: true }
  );

exports.deleteAnimal = async (animalId) =>
  await Animal.findByIdAndDelete(animalId);

exports.updateAnimal = async (animalId, animalData) =>
  await Animal.findByIdAndUpdate(animalId, animalData);

exports.getAnimalByLocation = async (location) => {
  let animals = await Animal.find().lean();
  animals = animals.filter((x) => x.location.includes(location));

  return animals;
};
