'use strict';

const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(morgan("dev"))

    .use(express.static(path.join(__dirname, "../public")))

    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

    .get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    .use(function(err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || "Internal server error.");
    })

    .listen(port, function() {
        console.log("Server listening at port 8080");
    })