const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 10000,
    useNullAsDefault: true
});

module.exports = knex;