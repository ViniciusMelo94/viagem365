'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('destinos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rua: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lat: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      long: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      descricao: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('destinos');

  }
};
