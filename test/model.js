import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("reflexCms", "avnadmin", "AVNS_nQZL7aEvy2j57It_dbQ", {
	dialect: "mysql",
	host: "reflex-cms-db-reflex-cms.a.aivencloud.com",
});
async function sqlizeAuth() {
	try {
		await sequelize.authenticate();
		console.log("Connected to notice database");
	} catch (error) {
        console.log(error)
		console.log("Error connection to notice database");
	}
}
sqlizeAuth();

const noticeTest=sequelize.define('notice',{
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
    },
    header:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:false,
    tableName:'noticesTable',
});
export default noticeTest;