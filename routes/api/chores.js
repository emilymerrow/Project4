//this file will determine the routes for the chore-related operations

const express = require("express");
const router = express.Router();
const choresCtrl = require("../../controllers/chores/chores");


router.post("/", choresCtrl.createChore); // Create a chore
router.put("/:id", choresCtrl.updateChore);  //Update a chore
router.delete("/:id", choresCtrl.deleteChore); //Delete a chore

module.exports = router;