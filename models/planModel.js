const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    // CODE HERE
    type: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }
});

const Plan = mongoose.model("Plan", UserSchema);

module.exports = Plan;
