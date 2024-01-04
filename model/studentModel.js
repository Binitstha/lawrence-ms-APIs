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

const user=sequelize.define('user',{
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
	position:{
		type:DataTypes.STRING,
		allowNull:false,
	},
	address:{
		type:DataTypes.STRING,
		allowNull:false
	},
	age :{
		type:DataTypes.INTEGER,
		allowNull:false
	},
	gender:{
		type:DataTypes.STRING,
		allowNull:false
	}


}, {
	timestamps:false,
	tableName:'users',
});
export default user;