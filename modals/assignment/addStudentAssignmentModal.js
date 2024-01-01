import { Sequelize, DataTypes } from 'sequelize';
import studentData from '../students/studentModal.js';
const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const assingmentData = sequelize.define('User',
    {
        studentid: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        studentname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Submissiondate: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: false,
    tableName: 'assignmentinfo'
});

studentData.hasMany(assingmentData, { foreignKey: 'studentid' });
assingmentData.belongsTo(studentData, { foreignKey: 'studentid' });

export default assingmentData;