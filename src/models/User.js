const User = (sequelize, DataTypes) => sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  phone: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = User;
