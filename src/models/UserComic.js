const UserComic = (sequelize, DataTypes) => {
  const UserComics = sequelize.define('UserComic', {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'UserComics',
    });

  UserComics.associate = (models) => {
    models.Comic.belongsToMany(models.User, {
      as: 'users',
      through: UserComics,
      foreignKey: 'comicId',
      otherKey: 'userId',
    });

    models.User.belongsToMany(models.Comic, {
      as: 'comics',
      through: UserComics,
      foreignKey: 'userId',
      otherKey: 'comicId',
    });
  };
  return UserComics;
};

module.exports = UserComic;
