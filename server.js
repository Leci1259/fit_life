const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

//middleware

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitlifedb", { useNewUrlParser: true });

//routes
app.use(require("./controllers/index"))

//listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
