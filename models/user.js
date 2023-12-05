const {Sequelize,DataTypes}= require('sequelize');
const sqlize=new Sequelize('userDatabase','root','2319',
	{
		dialect : 'mysql',
        host:'localhost'
	});
    
async function sqlizeAuth(){
try{
	await sqlize.authenticate();
	console.log('Connected to the database');
} catch(error){
	console.log("error");
}
}
sqlizeAuth();

const user=sqlize.define('user',{
	email:{
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey:true,

	},
	password: {
		type: DataTypes.STRING,
		allowNull:false,
	},
	token: {
		type: DataTypes.STRING,
		allowNull:true,
	},
	username:{
		type: DataTypes.STRING,
		allowNull:false,
	},
	
},{
	timestamps:false,
	tableName:'users',
	
});

module.exports=user;