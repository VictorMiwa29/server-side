const { Op } = require('sequelize');
const { User, Character, Comic } = require('../models');

async function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

async function registerUser(firstName, email, password) {
  const userExists = await findUserByEmail(email);

  if (userExists) return 'user exists';

  return User.create({ firstName, email, password });
}

async function loginUser(email, password) {
  return User.findOne({ where: { [Op.and]: [{ email }, { password }] }, raw: true });
}

async function editUser(firstName, lastName, email, password, phone, oldEmail) {
  const userExists = await findUserByEmail(email);

  if (userExists) return 'user exists';

  return User.update({
    firstName, lastName, email, password, phone,
  }, {
    where: {
      email: oldEmail,
    },
  });
}

async function favorite(id) {
  return User.findOne(
    {
      include: [
        { model: Character, as: 'characters', through: { attributes: [] } },
        { model: Comic, as: 'comics', through: { attributes: [] } },
      ],
      where: { id },
      attributes: ['id'],
    },
  );
}

module.exports = {
  registerUser,
  loginUser,
  editUser,
  findUserByEmail,
  favorite,
};
