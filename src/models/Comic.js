const Comic = (sequelize, DataTypes) => sequelize.define('Comic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  image: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Comic;
