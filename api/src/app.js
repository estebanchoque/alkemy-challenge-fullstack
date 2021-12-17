const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const logger = require("./middlewares/loggerMiddleware");

require("./db");

const server = express();

server.name = "API";

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
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

server.use("/", routes);

// Error catching endware
server.use(logger);

module.exports = server;
