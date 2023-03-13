const { DataTypes } = require("sequelize");
const { sequelize ,questions,answers} = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Corrects_anses = sequelize.define('corrects_anses',{
        idCorrect_ans: 
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
        },
        
        idquestion:{
            type: DataTypes.INTEGER,
            allowNull: false,
           references: questions,
           referenceskey: 'idquestion'
        },
            
        idanswer:{
            type: DataTypes.INTEGER,
            allowNull: false,
           references: answers,
           referenceskey: 'idanswer'
        },
           
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Corrects_anses;
}