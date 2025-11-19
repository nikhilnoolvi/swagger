const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const path = require("path");

// Path to your swagger.js file
const options = require("./backend/swagger");

const swaggerSpec = swaggerJSDoc(options);

// Write swagger.json to project root
fs.writeFileSync(
  path.join(__dirname, "swagger.json"),
  JSON.stringify(swaggerSpec, null, 2)
);

console.log("swagger.json generated successfully!");
