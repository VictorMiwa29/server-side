const { addCharacterFavorite, disfavorCharacter } = require('../services/UserCharacter');

async function favorite(req, res) {
  try {
    const {
      idUser, idCharacter, nameCharacter, image,
    } = req.body;

    await addCharacterFavorite(idUser, idCharacter, nameCharacter, image);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

async function disfavor(req, res) {
  try {
    const { idUser, idCharacter } = req.body;

    await disfavorCharacter(idUser, idCharacter);

    res.status(200);
  } catch (error) {
    res.status(500);
  }
}

module.exports = {
  favorite,
  disfavor,
};
