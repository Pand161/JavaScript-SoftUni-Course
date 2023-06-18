const router = require('express').Router();
const photoManager = require('../managers/photoManager');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage, errorHandler } = require('../utils/errorHelpers');

router.get('/create', isAuth, (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const { name, age, description, location, imageUrl } = req.body;
  try {
    await photoManager.createPhoto({
      name,
      age,
      description,
      location,
      imageUrl,
      owner: req.user._id,
    });

    res.redirect('/');
  } catch (err) {
    const error = getErrorMessage(err);
    res.render('create', { error });
  }
});

router.get('/details/:photoId', async (req, res) => {
  const photo = await photoManager.getPhotoById(req.params.photoId);
  let normalUser = false;
  let isOwner = false;
  const comments = photo.comments;

  if (photo.owner._id == req.user?._id) {
    isOwner = true;
  } else if (req.user?._id) {
    normalUser = true;
  }

  res.render('details', { photo, isOwner, normalUser, comments });
});

router.post('/comment/:photoId', isAuth, async (req, res) => {
  const photoId = req.params.photoId;
  const { message } = req.body;
  const username = req.user.username;

  await photoManager.postComment(photoId, { username, message });

  res.redirect('/catalog');
});

router.get('/delete/:photoId', isAuth, async (req, res) => {
  try {
    const photo = await photoManager.getPhotoById(req.params.photoId);
    if (photo.owner._id == req.user?._id) {
      await photoManager.deletePhoto(photo._id);
    }

    res.redirect('/catalog');
  } catch (err) {
    const error = await getErrorMessage(err);
    res.render('catalog', { error });
  }
});

router.get('/edit/:photoId', isAuth, async (req, res) => {
  try {
    const photo = await photoManager.getPhotoById(req.params.photoId);

    if (photo.owner._id.toString() !== req.user?._id) {
      res.redirect('/catalog');
    }

    res.render('edit', { photo });
  } catch (err) {
    const error = await getErrorMessage(err);
    res.render('/catalog', { error });
  }
});

router.post('/edit/:photoId', isAuth, async (req, res) => {
  try {
    await photoManager.updatePhoto(req.params.photoId, req.body);

    res.redirect(`/photo/details/${req.params.photoId}`);
  } catch (err) {
    const error = await getErrorMessage(err);
    res.render('/catalog', { error });
  }
});

module.exports = router;
