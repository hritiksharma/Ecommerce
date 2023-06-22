const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");
// config
dotenv.config({ path: "backend/config/config.env" });

// handle uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to uncaught exception!");
  process.exit(1);
});

// DataBase connect
connectDatabase();

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log("SERVER is running on PORT ", PORT);
});

// unhandled Promise rejection ....
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection!");

  server.close(() => {
    process.exit(1);
  });
});
