const express = require('express');
const router = express.Router();
const controller = require('../controllers/RespuestaLegalController');

router.get('/respuestaLegal', controller.gets);

module.exports = router;