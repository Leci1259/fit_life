const router = require("express").Router();
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
    Plans.create(req.body)
        .then(dbFitlife => {
            res.json(dbFitlife);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;