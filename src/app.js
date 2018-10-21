const express = require("express");
const errorHandler = require("./errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/default"));
app.use("/trucks", require("./routes/trucks"));
app.use(errorHandler);

module.exports = app;
