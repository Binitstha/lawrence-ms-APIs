// const {Sequelize,DataTypes}= require('sequelize');
import {Sequelize,DataTypes} from 'sequelize';
const sqlize=new Sequelize('cms','root','2319',
	{
		dialect : 'mysql',
        host:'localhost'
	});
    
async function sqlizeAuth(){
try{
	await sqlize.authenticate();
	console.log('Connected to the Students database');
} catch(error){
	console.log("error");
}
}
sqlizeAuth();

const user=sqlize.define('user',{
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true
	},
	email:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull:false,
	},
	name:{
		type: DataTypes.STRING,
		allowNull:false,
	},
	contact:{
		type:DataTypes.BIGINT,
		allowNull:false
	},
	semester:{
		type:DataTypes.INTEGER,
		allowNull:false,
	}
	
},{
	timestamps:false,
	tableName:'students',
	
});

export default user;