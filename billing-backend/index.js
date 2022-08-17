const express = require("express");
const IndexRoute = require("./Routes");
const multer = require("multer");
require("./config/db");
const cors = require("cors");
const upload = multer();
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/upload", express.static("upload"));

app.use("/", IndexRoute);
module.exports = app;
