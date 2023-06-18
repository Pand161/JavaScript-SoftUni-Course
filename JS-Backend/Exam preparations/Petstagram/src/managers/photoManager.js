const Photo = require('../models/Photo');

exports.createPhoto = async (photoData) => {
  const photo = await Photo.create(photoData);
  return photo;
};

exports.getAllPhotos = async () => await Photo.find().populate('owner').lean();

exports.getPhotoById = async (photoId) =>
  await Photo.findById(photoId).populate('owner').lean();

exports.deletePhoto = async (photoId) => await Photo.findByIdAndDelete(photoId);

exports.updatePhoto = async (photoId, photoData) =>
  await Photo.findByIdAndUpdate(photoId, photoData);

exports.postComment = async (photoId, commentData) => {
  const photo = await Photo.findByIdAndUpdate(
    photoId,
    { $push: { comments: commentData } },
    { new: true }
  );
  console.log(photo);
  return photo;
};
