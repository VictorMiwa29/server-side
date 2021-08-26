module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comics', {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comics');
  },
};
