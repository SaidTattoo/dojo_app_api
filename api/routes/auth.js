const express = require('express');
const { loginCtrl, registerCtrl } = require('../controllers/auth');
const router = express.Router();

router.post('/login', loginCtrl);
router.post('/register', registerCtrl);

module.exports = router;