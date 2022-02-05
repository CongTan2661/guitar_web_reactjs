'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      typesProduct: {
        type: Sequelize.STRING
      },
      typeNamePro:{
        type:Sequelize.STRING
      },
      materialProduct: {
        type: Sequelize.STRING
      },
      priceProduct: {
        type: Sequelize.INTEGER
      },
      quantityProduct: {
        type: Sequelize.INTEGER
      },
      discountProduct: {
        type: Sequelize.INTEGER
      },
      imgProductMain: {
        type: Sequelize.STRING
      },
      listImg: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};