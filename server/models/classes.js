const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Class = sequelize.define('classes',{
        idclass: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
            },
        description:
        {
            type:DataTypes.STRING,
            uniqe:true,
            allowNull: false
        }
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