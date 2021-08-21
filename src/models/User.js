const User = (sequelize, DataTypes) => sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = User;
