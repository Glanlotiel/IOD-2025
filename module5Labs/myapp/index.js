const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dataApp = require("./app");
// ---------------------------------- //
// Main public Server
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", pageRoutes);

app.listen(3000, () => {
  console.log("Example app listening at http://localhost:3000");
});
// ---------------------------------- //

dataApp.listen(3001, () => {
  console.log("api server on http://localhost:3001");
});
// Data server

// ---------------------------------- //

//Admin Server
const adminApp = express();

adminApp.use("/", adminRoutes);

adminApp.listen(3002, () => {
  console.log("admin server on http://localhost:3002");
});

// ---------------------------------- //

//Swagger
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
