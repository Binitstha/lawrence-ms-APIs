import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const internalMarks = sequelize.define('User',
    {
        studentid: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        semester: {
            type: DataTypes.STRING,
            allowNull: true
        },
        marks:{
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        remark:{
         type: DataTypes.STRING,
         allowNull: false
        }
    }, {
    timestamps: false,
    tableName: 'internalmarksinfo'
});

export default internalMarks;