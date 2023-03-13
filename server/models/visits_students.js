const db=require("./index")
const { DataTypes } = require("sequelize");
const { sequelize,students,levels } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Visit = sequelize.define('visits_students',{
        idvisit_student: {
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                    autoIncrement:true
                     },
        idstudent:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey:true,
            references: students,
            referenceskey: 'idstudent'
        },
        enterdate: DataTypes.DATE,
        exitdate: DataTypes.DATE,
        // idlevel:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     // foreignKey:true,
        //     references: levels,
        //     referenceskey: 'idlevel'
        // }
    
    },
    // {
    //     freezeTableName:true
    // }  
    {
        timestamps: false
    },
  
    );
    return Visit;
}