const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Student = sequelize.define('students',{
        idstudent: {
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                    autoIncrement:true
                    },
        name:DataTypes.STRING,
        grade:DataTypes.STRING,
        mail:{
            type:DataTypes.STRING,
            uniqe:true
        },
        phone: DataTypes.INTEGER,
        id:{type:DataTypes.INTEGER,
            uniqe:true
        } ,
        password: DataTypes.STRING,
        ismanager: DataTypes.INTEGER
    },
    // {
    //     freezeTableName:true
    // }  
    {
        timestamps: false
    },
  
    );
    return Student;
}