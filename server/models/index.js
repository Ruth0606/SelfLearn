const dbConfig = require("../dbConfig/dbConfig");
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.answers=require('./answers')(sequelize, DataTypes)
db.classes=require('./classes')(sequelize, DataTypes)
db.corrects_anses=require('./corrects_anses')(sequelize, DataTypes)
db.levels=require('./levels')(sequelize, DataTypes)
db.materials=require('./materials')(sequelize, DataTypes)
db.questions_types=require('./questions_types')(sequelize, DataTypes)
db.questions=require('./questions')(sequelize, DataTypes)
db.students = require('./students')(sequelize, DataTypes)
db.subjects=require('./subjects')(sequelize, DataTypes)
db.subsubjects=require('./subsubjects')(sequelize, DataTypes)
db.tests=require('./tests')(sequelize, DataTypes)
db.visits_students=require('./visits_students')(sequelize, DataTypes)
db.visits_levels=require('./visits_levels')(sequelize, DataTypes)

db.answers.hasMany(db.corrects_anses,{foreignKey:'idanswer'});//, as:"description"
db.corrects_anses.belongsTo(db.answers,{foreignKey:'idanswer'});

db.levels.hasMany(db.tests,{foreignKey:'idlevel'});
db.tests.belongsTo(db.levels,{foreignKey:'idlevel'});

db.subjects.hasMany(db.tests,{foreignKey:'idsubject'});
db.tests.belongsTo(db.subjects,{foreignKey:'idsubject'});

db.subsubjects.hasMany(db.levels,{foreignKey:'idsubsubject'});
db.levels.belongsTo(db.subsubjects,{foreignKey:'idsubsubject'});

db.subjects.hasMany(db.subsubjects,{foreignKey:'idsubject'});
db.subsubjects.belongsTo(db.subjects,{foreignKey:'idsubject'});

db.visits_students.hasMany(db.visits_levels,{foreignKey:'idvisit_student'});
db.visits_levels.belongsTo(db.visits_students,{foreignKey:'idvisit_student',as:"dd"});

db.levels.hasMany(db.visits_levels,{foreignKey:'idlevel'});
db.visits_levels.belongsTo(db.levels,{foreignKey:'idlevel'});

// db.visits_students.belongsTo(db.visits_levels,{foreignKey:'idvisit_student'});
// db.visits_levels.hasMany(db.visits_students,{foreignKey:'idvisit_student'});//, as:"description"

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })

module.exports = db
