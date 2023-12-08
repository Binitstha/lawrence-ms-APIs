import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("notices", "root", "2319", {
	dialect: "mysql",
	host: "localhost",
});
async function sqlizeAuth() {
	try {
		await sequelize.authenticate();
		console.log("Connected to notice database");
	} catch (error) {
		console.log("Error connection to notice database");
	}
}
sqlizeAuth();

const notice=sequelize.define('notice',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    header:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    semester:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false,
    tableName:'noticesTable',
});
export default notice