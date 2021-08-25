const UserComic = (sequelize, DataTypes) => sequelize.define('UserComic',
  {},
  {
    timestamps: false,
  });

UserComic.associate = (models) => {
  models.Comic.belongsToMany(models.User, {
    as: 'users',
    through: UserComic,
    foreignKey: 'comic_id',
    otherKey: 'user_id',
  });

  models.User.belongsToMany(models.Comic, {
    as: 'comic',
    through: UserComic,
    foreignKey: 'user_id',
    otherKey: 'comic_id',
  });
};

module.exports = UserComic;
