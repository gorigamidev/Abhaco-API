<<<<<<< HEAD
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

=======
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

>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
module.exports = knex;