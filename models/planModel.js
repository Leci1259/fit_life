const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = new Schema({
    // CODE HERE
    day: {
        type: Date,
        default: () => new Date()
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
            },
            distance: {
                type: Number,
            }
        }
    ],
},
    {
        toJSON: {
            // include any virtual properties when data is requested
            //will keep values for stats page
            virtuals: true
        },
    }
);

planSchema.virtual("totalDuration").get(() => {
    //use reduce method to go through array and get total duration
    if (this.exercises) {
        const duration = this.exercises.reduce((total, exercise) => {
            return total + exercise.duration;
        }, 0);

        return duration;
    };
})

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
