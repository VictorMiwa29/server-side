module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserCharacters', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      characterId: {
        type: Sequelize.INTEGER,
        field: 'character_id',
        references: {
          model: 'Characters',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserCharacters');
  },
};
