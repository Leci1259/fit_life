const path = require("path");
const app = require('express').Router();

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

module.exports = app;