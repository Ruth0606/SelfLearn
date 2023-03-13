const db=require("./index")
const { DataTypes } = require("sequelize");
const { sequelize,students,levels,visits_students } = require(".");
//const visits_students = require("./visits_students");

module.exports = (sequelize,DataTypes)=>{
    const VisitLevel = sequelize.define('visits_levels',{
        idvisit_level: {
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                    autoIncrement:true
                     },
        idvisit_student:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey:true,
            references: visits_students,
            referenceskey: 'idvisit_student'
        },

        idlevel:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey:true,
            references: levels,
            referenceskey: 'idlevel'
        }
    
    },
    // {
    //     freezeTableName:true
    // }  
    {
        timestamps: false
    },
  
    );
    return VisitLevel;
}