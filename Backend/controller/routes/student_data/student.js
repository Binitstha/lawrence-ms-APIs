import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const studentData = sequelize.define('User',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        studentName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique : true
        },
        semester:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    timestamps: false,
    tableName: 'studentInfo'
});

export default studentData