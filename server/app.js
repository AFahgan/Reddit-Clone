const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const { apiRoute, publicRoute } = require("./routes");
const cookieParser = require("cookie-parser");
const { clientError, serverError } = require("./controllers");

app.use(cookieParser());
app.use(compression());
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/v1", apiRoute);
app.use(publicRoute);
app.use(clientError);
app.use(serverError);
module.exports = app;
