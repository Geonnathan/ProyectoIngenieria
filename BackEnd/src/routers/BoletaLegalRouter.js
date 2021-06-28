const express = require('express');
const router = express.Router();
const controller = require('../controllers/BoletaLegalController');

router.post('/boletaLegal', controller.save);

module.exports = router;