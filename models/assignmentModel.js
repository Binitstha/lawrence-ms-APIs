import { Sequelize,DataTypes } from "sequelize";
const sequelize=new Sequelize('assignmentdb','root','2319',{
    dialect:'mysql',
    host:'localhost'
})

async function sequelizeAuth(){
    try{
        await sequelize.authenticate();
        console.log('Connected to assignment database');

    } catch(error){
        console.log(error);
    }
}
sequelizeAuth();


const assModel=sequelize.define('assModel',{
    header:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    assignedDate:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    dueDate:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
},{
    timestamps:false,
    tableName:'assTable',
});
export default assModel;

