require("dotenv").config();
const server = require("./src/app");
const { conn } = require("./src/db");
const { PORT = 3001 } = process.env;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log(`%s listening at ${PORT}`));
});
