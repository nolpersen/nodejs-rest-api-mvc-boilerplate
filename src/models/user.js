const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../configs/db');

module.exports = sequelize.define(
    'users',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        created_at:{
            type:DataTypes.TIME
        },
        updated_at:{
            type:DataTypes.TIME
        }
    }
)