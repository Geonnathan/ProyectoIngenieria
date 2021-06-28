const express = require('express');
const router = express.Router();
const controller = require('../controllers/ClasificadorController');

router.get('/clasificador', controller.gets);

module.exports = router;