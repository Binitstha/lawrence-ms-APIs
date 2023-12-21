import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('userinfodb', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

const SyllabusData = sequelize.define('User',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Subjectcode: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        chapterId:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    }, {
    timestamps: false,
    tableName: 'Syllabus'
});

export default SyllabusData