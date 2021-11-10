const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./planRoutes');

router.use('/workouts', apiRoutes);

module.exports = router;