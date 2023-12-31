import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const questionDB = sequelize.define('user',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question:{
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        semester: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image:
        {
            type: DataTypes.BLOB,
            allowNull: true
        }
    }, {
    timestamps: false,
    tableName: 'question'
});

export default questionDB

/* Id | question | year | sub | sem */