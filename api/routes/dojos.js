const express = require('express');
const { getAllDojos,createDojo } = require('../controllers/dojo');
const { cacheInit } = require('../middleware/cache');
const router = express.Router();

router.get('/', getAllDojos);
router.post('/createdojo', createDojo);
module.exports = router;