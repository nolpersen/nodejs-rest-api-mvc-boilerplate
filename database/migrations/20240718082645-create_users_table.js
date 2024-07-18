'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable('users', { 
      id: {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
        type : Sequelize.DataTypes.STRING,
      },
      email:{
        type : Sequelize.DataTypes.STRING,
      },
      password:{
        type : Sequelize.DataTypes.STRING,
      },
      created_at:{
        type : Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updated_at:{
        type : Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.dropTable('users');
  }
};
