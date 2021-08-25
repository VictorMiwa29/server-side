const Character = (sequelize, DataTypes) => sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  image: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Character;
