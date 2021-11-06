const router = require("express").Router();
const { route } = require(".");
const Plans = require('../../models/planModel');


//get last workout
router.get("/", (req, res) => {
    Plans.find({})
        .sort({ date: -1 })
        .limit(1)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get workouts in range

//put request
router.put("/", (req, res) => {
    Plans.findByIdAndUpdate(
        params.id,
        {
            $push:
                { exercises: req.body }
        }
    )
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

//post request
router.post("/", (req, res) => {
    Plans.insertMany(req.body)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

