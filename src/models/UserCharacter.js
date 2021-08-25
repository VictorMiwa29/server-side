const UserCharacter = (sequelize, DataTypes) => sequelize.define('UserCharacter',
  {},
  {
    timestamps: false,
  });

UserCharacter.associate = (models) => {
  models.Character.belongsToMany(models.User, {
    as: 'users',
    through: UserCharacter,
    foreignKey: 'character_id',
    otherKey: 'user_id',
  });

  models.User.belongsToMany(models.Character, {
    as: 'character',
    through: UserCharacter,
    foreignKey: 'user_id',
    otherKey: 'character_id',
  });
};

module.exports = UserCharacter;
