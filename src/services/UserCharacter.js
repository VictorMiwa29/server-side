const { Character, UserCharacter } = require('../models');

async function findCharacter(id) {
  return Character.findOne({ where: { id } });
}

async function addCharacterFavorite(idUser, idCharacter, nameCharacter, image) {
  const character = await findCharacter(idCharacter);

  if (!character) {
    await Character.create({ id: idCharacter, name: nameCharacter, image });
  }

  return UserCharacter.create({ userId: idUser, characterId: idCharacter });
}

async function disfavorCharacter(idUser, idCharacter) {
  return UserCharacter.destroy({ where: { userId: idUser, characterId: idCharacter } });
}

module.exports = {
  findCharacter,
  addCharacterFavorite,
  disfavorCharacter,
};
