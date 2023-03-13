const { DataTypes } = require("sequelize");
const { sequelize,classes } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Class = sequelize.define('subjects',{
        idsubject: 
        {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
        },
        idclass:{
            type: DataTypes.INTEGER,
             allowNull: false,
            //  foreignKey:true,
             references: classes,
             referenceskey: 'idclass'
        },
            description:DataTypes.STRING,
            passing_grade:DataTypes.INTEGER,
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Class;
}