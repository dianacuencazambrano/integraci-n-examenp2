const express = require('express');
const router = express.Router();

router.use('/cliente', require('./controllers/clientController.js'));

router.use('/info', require('./controllers/infoController'));

module.exports = router;
