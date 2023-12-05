const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps : false,
        tableName: 'userinfo'
    });

module.exports = User