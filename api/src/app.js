const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");

require("./db");

const server = express();

server.name = "API";

server.use(logger("dev"));
server.use(helmet());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/api/v1", routes);

server.use(notFound);

server.use(errorHandler);

module.exports = server;
