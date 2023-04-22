<<<<<<< HEAD
const knex = require('../config/connection');

function testConnectionMiddleware(req, res, next) {
    knex.raw('SELECT 1')
      .then(() => {
        console.log('Database connection successful');
        next(); // continue to the next middleware or route handler
      })
      .catch((error) => {
        console.error('Error connecting to database:', error);
        res.status(500).send('Internal server error'); // send an error response
      });
  }
  
module.exports = testConnectionMiddleware;
=======
const knex = require('../config/connection');

function testConnectionMiddleware(req, res, next) {
    knex.raw('SELECT 1')
      .then(() => {
        console.log('Database connection successful');
        next(); // continue to the next middleware or route handler
      })
      .catch((error) => {
        console.error('Error connecting to database:', error);
        res.status(500).send('Internal server error'); // send an error response
      });
  }
  
module.exports = testConnectionMiddleware;
>>>>>>> 302ad8ac8c3e97746b5fdc63fd767d6d868a24ae
  