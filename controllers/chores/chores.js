const Chore = require("../../models/chore");


module.exports = {
    createChore,
    updateChore,
    deleteChore,
};

async function createChore(req, res) {
    //create chore functionality
    try {
        //Use the request body to create a new chore object
        const chore = new Chore(req.body);

        //Associate the chore with the parent user by using the req.user._id
        chore.assignedChild = req.user._id;

        //Save the chore to the database
        await chore.save();

        //Send the saved chore as the response
        res.status(201).json(chore);
    } catch (err) {
        res.status(500).json(err);
    }
    
}

function updateChore(req, res) {

}

function deleteChore(req, res) {

}