const router = require('express').Router();
const planRoutes = require('./planRoutes');

router.use('/plan', planRoutes);

module.exports = router;