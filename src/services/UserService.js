const { Op } = require('sequelize');
const { User } = require('../models');

async function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

async function registerUser(name, email, password) {
  const userExists = await findUserByEmail(email);

  if (userExists) return 'user exists';

  return User.create({ name, email, password });
}

async function loginUser(email, password) {
  return User.findOne({ where: { [Op.and]: [{ email }, { password }] } });
}

module.exports = {
  registerUser,
  loginUser,
};
