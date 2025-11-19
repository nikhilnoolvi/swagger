module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MERN CRUD API",
      version: "1.0.0",
      description: "API documentation for the MERN CRUD App",
      contact: {
        name: "Nikhil",
        email: "noolvi@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8005",
        description: "Development server",
      },
    ],
  },
  apis: ["./backend/routes/*.js"] // update path based on your folder
};
