const { DataTypes } = require("sequelize");
const { sequelize,subjects } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Subsubject = sequelize.define('subsubjects',{
        idsubsubject: 
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
        },
        description:DataTypes.STRING,
        idsubject:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // foreignKey:true,
           references: subjects,
           referenceskey: 'idsubject'
        },
           
           
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Subsubject;
}