const express = require('express');
const { cacheInit } = require('../middleware/cache');
const { getClassByDojo, createClassByDojo } = require('../controllers/class');
const router = express.Router();

router.get('/',cacheInit, getClassByDojo);
router.post('/createClass', createClassByDojo );

module.exports = router;