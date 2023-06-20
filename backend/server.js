const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");
// config
dotenv.config({ path: "backend/config/config.env" });

// DataBase connect
connectDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("SERVER is running on PORT ", PORT);
});
