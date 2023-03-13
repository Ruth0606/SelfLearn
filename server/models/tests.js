const { DataTypes } = require("sequelize");
const { sequelize, students,questions_types,levels,subjects} = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Test = sequelize.define('tests',{
        idtest: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement:true
            },
            idstudent:{
                type: DataTypes.INTEGER,
                allowNull: false,
                // foreignKey:true,
                references: students,
                referenceskey: 'idstudent'
            },
            mark: DataTypes.STRING,
            date: DataTypes.DATE,
            file: DataTypes.STRING,
            idquestion_type:{
                type: DataTypes.INTEGER,
                allowNull: false,
                // foreignKey:true,
                references: questions_types,
                referenceskey: 'idquestion_type'
            },
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
    return Test;
}