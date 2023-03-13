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
        mail:DataTypes.STRING,
        phone: DataTypes.INTEGER,
        id: DataTypes.INTEGER,
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