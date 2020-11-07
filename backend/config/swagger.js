const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "SpaceBay API",
        version: "0.1.0",
        description:
          "Documented with Swagger.",
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: [
        "./routes/users.js",
        "./routes/products.js"
    ]
  };

module.exports = options