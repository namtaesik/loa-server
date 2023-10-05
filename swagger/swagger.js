const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger 입니다.",
      description: "잘써보자",
    },
    servers: [
      {
        url: "http://localhost:3001", // 요청 URL
      },
    ],
  },
  apis: ["../api/*/*"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
