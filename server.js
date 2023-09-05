require("dotenv").config();
require("colors");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 8080;
const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful".green.italic.bold);
    app.listen(PORT, () => {
      console.log(
        `Server running. Use our API on port: ${PORT}`.green.italic.bold
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
