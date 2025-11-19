const path = require("path");
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

  // IMPORTANT: Scan backend/server.js, backend/app.js, and all routes
  apis: [
    path.join(__dirname, "server.js"),
    path.join(__dirname, "app.js"),
    path.join(__dirname, "routes/**/*.js")
  ]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
