const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const multer = require('multer');
const upload = multer();





/*---------- Public Routes ----------*/

//user multer for file upload

router.post("/signup", upload.single('photo'), usersCtrl.signup);
router.post("/login", usersCtrl.login);

// Get user profile by username
router.get('/:username', usersCtrl.profile);

/*---------- Protected Routes ----------*/

module.exports = router;



/*---------- Protected Routes ----------*/



