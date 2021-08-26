const { Comic, UserComic } = require('../models');

async function findComic(id) {
  return Comic.findOne({ where: { id } });
}

async function addComicFavorite(idUser, idComic, nameComic, image) {
  const comic = await findComic(idComic);

  if (!comic) {
    await Comic.create({ id: idComic, title: nameComic, image });
  }

  return UserComic.create({ userId: idUser, comicId: idComic });
}

async function disfavorComic(idUser, idComic) {
  return UserComic.destroy({ where: { userId: idUser, comicId: idComic } });
}

module.exports = {
  findComic,
  addComicFavorite,
  disfavorComic,
};
