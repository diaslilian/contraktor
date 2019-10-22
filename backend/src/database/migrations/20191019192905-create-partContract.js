module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PartContract', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      contract_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contracts',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
      },
      part_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'parts',
          key: 'id',
        },
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('details');
  },
};
