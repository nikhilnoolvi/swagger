const fs = require("fs");
const path = require("path");
const swaggerSpec = require("./swagger");

// Resolve path correctly regardless of working directory
const outputDir = path.join(__dirname, "public");
const outputFile = path.join(outputDir, "swagger-output.json");

// Ensure folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(swaggerSpec, null, 2));

console.log("✔ Swagger JSON generated successfully at:", outputFile);
