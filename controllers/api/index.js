const router = require('express').Router();
const planRoutes = require('./planRoutes');

router.use('/workouts', planRoutes);

module.exports = router;