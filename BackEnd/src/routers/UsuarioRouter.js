const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

router.get('/usuario', controller.gets);

module.exports = router;