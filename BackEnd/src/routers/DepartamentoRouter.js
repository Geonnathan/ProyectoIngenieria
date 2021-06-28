const express = require('express');
const router = express.Router();
const controller = require('../controllers/DepartamentoController');

router.get('/departamento', controller.gets);

module.exports = router;