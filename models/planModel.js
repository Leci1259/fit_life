const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    // CODE HERE
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter Exercise Type!"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter Exercise Name!"
            },
            duration: {
                type: Number,
                required: "Enter Exercise Duration in Minutes!"
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
        }
    ],

});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
