import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const collegeEvents = sequelize.define('User',
    {
        eventid: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        events: {
            type: DataTypes.STRING,
            allowNull: true
        },
        eventDesc:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        venue:{
         type: DataTypes.STRING,
         allowNull: false
        }
    }, {
    timestamps: false,
    tableName: 'collegeEventsinfo'
});

export default collegeEvents;