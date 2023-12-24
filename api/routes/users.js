const  express = require("express");
const router = express.Router();
const { getUsers, createUser, removeAll, enrollUser } = require("../controllers/users.js");
const { checkOrigin } = require("../middleware/origin.js");
const { cacheInit } = require("../middleware/cache.js");
const checkAuth = require("../middleware/auth.js");
const checkRoleAuth = require("../middleware/roleAuth.js");

router.get('/',cacheInit, getUsers);
router.post('/create', checkOrigin, createUser);
router.delete('/removeAll',checkAuth, checkRoleAuth(['superAdmin']), removeAll);
router.post('/enroll', enrollUser);

router.get('*', (req, res) => {
  res.status(404).send('error');
});
module.exports = router;