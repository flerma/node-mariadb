const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorAliases: false,
    pool: {
        max: env.max,
        min: env.min,
        acquire: env.acquire,
        idle: env.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

module.exports = db;