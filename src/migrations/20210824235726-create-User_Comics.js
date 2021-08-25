module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserComics', {
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
      comicId: {
        type: Sequelize.INTEGER,
        field: 'comic_id',
        references: {
          model: 'Comics',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserComics');
  },
};
