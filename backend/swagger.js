const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
      description: "Swagger API docs deployed on GitHub Pages"
    },
    servers: [
      { url: "http://localhost:5000" }
    ]
  },
  apis: ["./index.js"] // API annotations inside index.js
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
