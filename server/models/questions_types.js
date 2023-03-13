const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Question_type = sequelize.define('questions_types',{
        idquestion_type: 
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
        },
        description:DataTypes.STRING,     
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Question_type;
}