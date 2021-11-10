const router = require("express").Router();
const Plans = require('../../models/planModel');
const mongoose = require("mongoose"); ``

//get last workout
router.get("/", (req, res) => {
    Plans.find({})
        .sort({ date: -1 })
        // .limit(1)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get range of  workouts
router.get("/range", (req, res) => {
    Plans.find({})
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
    Plans.create({})
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;