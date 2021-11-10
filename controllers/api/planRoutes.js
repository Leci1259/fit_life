const router = require("express").Router();
const Plans = require('../../models/planModel');
const mongoose = require("mongoose"); ``

//get last workout
router.get("/", async (req, res) => {
    await Plans.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .sort({ date: -1 })
        .limit(1)
        .then((dbFitlife) => {
            res.json(dbFitlife);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

//get range of  workouts
router.get("/range", async (req, res) => {
    await Plans.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .sort({ date: -1 })
        .limit(7)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//put request
router.put("/:id", (req, res) => {
    Plans.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $push:
                { exercises: req.body }
        },
        { new: true }

    )
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

//post request
router.post("/", ({ body }, res) => {
    Plans.create(body)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            console.log("err=", err)
            res.status(400).json(err);
        });
})

module.exports = router;