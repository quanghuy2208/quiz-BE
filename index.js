const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routers = require("./Routers");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
console.log("🚀 ~ port:", port);

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cookieParser());
routers(app);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("OK");
  });
app.listen(port, () => {
  console.log("Server is running in port: ", +port);
});
