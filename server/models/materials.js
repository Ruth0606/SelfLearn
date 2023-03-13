const { DataTypes } = require("sequelize");
const { sequelize,levels } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Material = sequelize.define('materials',{
        idmaterial: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
            },
        idlevel:{
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey:true,
                 references: levels,
                 referenceskey: 'idlevel'
            },
            description:DataTypes.STRING
    },
    // {
    //     freezeTableName:true
    // }
    {
        timestamps: false
    },
    );
    return Material;
}
