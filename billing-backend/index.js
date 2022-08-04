const express = require("express");
const IndexRoute = require("./Routes");
require("./config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", IndexRoute);
module.exports = app;
