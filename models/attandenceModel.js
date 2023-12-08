import { Sequelize,DataTypes } from "sequelize";
const sequelize=new Sequelize('attbd','root','2319',{dialect:'mysql',host:"localhost"});

async function sqlizeAuth(){
    try{
        await sequelize.authenticate();
        console.log('connected to attandance database');
    } catch(error){
        console.log(error);
    }
}
sqlizeAuth();


const attModel=sequelize.define('attModel',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    pCount:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
	timestamps:false,
	tableName:'att',
	
});

export default attModel;