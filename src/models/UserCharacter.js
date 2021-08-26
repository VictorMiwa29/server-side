const UserCharacter = (sequelize, DataTypes) => {
  const UserCharacters = sequelize.define('UserCharacter', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'UserCharacters',
  });

  UserCharacters.associate = (models) => {
    models.Character.belongsToMany(models.User, {
      as: 'users',
      through: UserCharacters,
      foreignKey: 'characterId',
      otherKey: 'userId',
    });

    models.User.belongsToMany(models.Character, {
      as: 'characters',
      through: UserCharacters,
      foreignKey: 'userId',
      otherKey: 'characterId',
    });
  };
  return UserCharacters;
};

module.exports = UserCharacter;
