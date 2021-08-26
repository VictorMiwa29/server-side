const { addComicFavorite, disfavorComic } = require('../services/UserComicService');

async function favoriteComic(req, res) {
  try {
    const {
      idUser, idComic, titleComic, image,
    } = req.body;

    await addComicFavorite(idUser, idComic, titleComic, image);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function disfavorComics(req, res) {
  try {
    const { idUser, idComic } = req.body;

    await disfavorComic(idUser, idComic);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  favoriteComic,
  disfavorComics,
};
