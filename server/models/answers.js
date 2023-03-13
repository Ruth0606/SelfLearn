const { DataTypes } = require("sequelize");
const { sequelize,questions } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Answer = sequelize.define('answers',{
        idanswer: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
            },
            idquestion:{
                type: DataTypes.INTEGER,
                allowNull: false,
            //    foreignKey:true,
                references: questions,
                 referenceskey: 'idquestion'
            },
            description: DataTypes.STRING,

    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Answer;
}