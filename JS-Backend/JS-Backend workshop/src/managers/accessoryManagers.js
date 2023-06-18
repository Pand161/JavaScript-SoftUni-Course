const Accessory = require('../models/Accessory');

exports.createAccessory = async (accessoryData) => {
  const accessory = new Accessory(accessoryData);
  await accessory.save();
  return accessory;
};

exports.getAllAccessory = async () => {
  const result = await Accessory.find().lean();
  return result;
};

exports.getAvailable = (accessoryIds) =>
  Accessory.find({ _id: { $nin: accessoryIds } }).lean();
