const env = {
    database: 'nodedb',
    username: 'root',
    password: 'root',
    host: 'mariadb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;