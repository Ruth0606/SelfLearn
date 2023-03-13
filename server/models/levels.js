const { DataTypes } = require("sequelize");
const { sequelize,subsubjects } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Level = sequelize.define('levels',{
        idlevel: 
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
        },
        description:DataTypes.STRING,
        idsubsubject:{
            type: DataTypes.INTEGER,
            allowNull: false,
           // foreignKey:true,
            references: subsubjects,
          referenceskey: 'idsubsubject'
        },
           
           
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Level;
}