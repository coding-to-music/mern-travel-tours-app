const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

// const DB = process.env.DATABASE.replace(
//    '<PASSWORD>',
//    process.env.DATABASE_PASSWORD
// );

// DB config
const connectionUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mern-tours-travel-app";

mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✌ Database connection successful!"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  // console.log(`💥 Application is running on PORT: ${port}...`);
  console.log(`Server listening on port http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
