const db=require("../models/index")
const { DataTypes } = require("sequelize");
const { sequelize,questions_types,levels,subjects } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Question = sequelize.define('questions',{
        idquestion: {
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                    autoIncrement:true
                     },
        description:DataTypes.STRING,
        idlevel:{
            type: DataTypes.INTEGER,
             allowNull: false,
            // foreignKey:true,
             references: levels,
             referenceskey: 'idlevel'
        },
        idsubject:{
            type: DataTypes.INTEGER,
             allowNull: false,
           //  foreignKey:true,
             references: subjects,
             referenceskey: 'idsubject'
        },
        idquestion_type:{
            type: DataTypes.INTEGER,
           allowNull: false,
           //foreignKey:true,
              references: questions_types,
             referenceskey: 'idquestion_type'
        },
        score: DataTypes.INTEGER
    },
    // {
    //     freezeTableName:true
    // }  
    {
        timestamps: false
    },
  
    );
    return Question;
}