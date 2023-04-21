//Server Dependencies
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieSession = require('./assets/cookieSession');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const testConnectionMiddleware = require('./assets/testConnection');

//Server Configuration
const server = express();
const port = process.env.PORT;

//Test the connection middleware
server.use(testConnectionMiddleware);
server.get('/api', (req, res) => {
    if (res.status(200)) {
      res.json({ 
        message: 'Welcome to the ABHACO API',
        docURL: 'http://localhost:5050/api-docs/'
      });
    }
});

//Cors for cross origin allowance
const cors=require("cors");
const corsOptions ={
   origin:[
    "http://localhost:5173"
   ], 
   credentials:true,            //access-control-allow-credentials:true
   methods: ["GET","HEAD","OPTIONS","PUT","PATCH","POST","DELETE"],
   exposedHeaders:['set-cookie'],
   optionSuccessStatus:200,
}
server.use(cors(corsOptions))

//Helmet middleware
server.use(helmet());

//Use the cookieSession function
cookieSession(server);

//API auto documentation (Swagger)
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Abhaco API Documentation',
        version: '1.0.0',
        description: 'API documentation for the application ABHACO'
      }
    },
    apis: ['./routes/*.js']
};
  
const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Routes Use
const auth = require('./routes/login-logout');
const users = require('./routes/users');
const qatable = require('./routes/qatable');
const movements = require('./routes/movements');
const restorePass = require('./routes/forgot-reset')

//Middleware
server.use(bodyParser.json());

//Routes Endpoints
server.use('/api/auth', auth);
server.use('/api/users', users);
server.use('/api/qa', qatable);
server.use('/api/movements', movements);
server.use('/api/service', restorePass);

//App server initialization
server.listen(port, () =>  
    console.log(`The Server is running on port ${port}`)
);