const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API para la gestión de contactos - CSE 341',
  },
  host: 'cse341-webservices-jp5b.onrender.com', 
  schemes: ['https'], 
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Genera el swagger.json
swaggerAutogen(outputFile, endpointsFiles);