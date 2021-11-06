var path = require("path");

module.exports = function (app) {
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/stats.html"));
    });

}