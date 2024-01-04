import { Sequelize,DataTypes } from "sequelize";
const sequelize= new Sequelize('cms','root','2319',{
	dialect:'mysql',
	host:'localhost',
});

async function sequelizeAuth(){
	try{
		await sequelize.authenticate();
		console.log("Connected to students database");
	} catch(error){
		console.log(error);
	}
}

sequelizeAuth();

const student=sequelize.define('student',{
	id:{
		type:DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true
	},
	email:{
		type:DataTypes.STRING,
		allowNull:false,
	},
	password:{
		type:DataTypes.STRING,
		allowNull:false,
	},
	name:{
		type:DataTypes.STRING,
		allowNull:false,
	},
	contact:{
		type:DataTypes.BIGINT,
		allowNull:false,
	},
	semester:{
		type:DataTypes.INTEGER,
		allowNull:false,
	}

}, {
	timestamps:false,
	tableName:'students',
});
export default student;