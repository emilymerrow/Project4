//this file will determine the routes for the chore-related operations

const express = require("express");
const router = express.Router();
const choresCtrl = require("../../controllers/chores");
const multer = require('multer')
const upload = multer()
const Chore = require('../models/chore');
// router.post('/', upload.single('photo'), choresCtrl.create);

router.post("/", choresCtrl.createChore); // Create a chore
router.put("/:id", choresCtrl.updateChore);  //Update a chore
router.delete("/:id", choresCtrl.deleteChore); //Delete a chore
router.get('/', choresCtrl.indexChore)
// create a new route for marking a chore as complete


module.exports = router;