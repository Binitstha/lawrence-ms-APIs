// const {Sequelize,DataTypes}= require('sequelize');
import {Sequelize,DataTypes} from 'sequelize';
const sqlize=new Sequelize('sql12674468','sql12674468','ZyKhdG9tz6',
	{
		dialect : 'mysql',
        host:'sql12.freemysqlhosting.net',
	});
    
async function sqlizeAuth(){
try{
	await sqlize.authenticate();
	console.log('Connected to the remote Students database');
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