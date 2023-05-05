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

async function updateChore(req, res) {
    try {
        const updatedChore = await Chore.findByIdAndUpdate(
            req.params.id, //chore ID from the request parameters
            req.body, //new data from the request body 
            { new: true, runValidators: true } //options to return the updated document
                                               //and run validations on the updated fields
        );

        if (!updatedChore) {
            return res.status(404).json({ error: "Chore not found" });
        }
        res.status(200).json(updatedChore);
    } catch (err) {
        res.status(500).json(err);
    }

}
// Define an asynchronous function called deleteChore that takes
//req and res as arguments
async function deleteChore(req, res) {
    try {  //start of the try block 
    //Attempt to find and delete the chore with the specified ID from the requested parameters
    const deleteChore = await Chore.findByIdAndDelete(req.params.id);

    // Check if the deletedChore is null or undefined, which means the chore was not found
    if (!deletedChore) {
        // Return a 404 status with an error message indicating the chore was not found
        return res.status(404).json({ error: "Chore not found" });
      }
  
    //If the chore is found and deleted, send back the deleted chore with a 200 status
    res.status(200).json(deletedChore);
  } catch (err) { //Start of the catch block
// If there is an errow, send a 500 status with the error message
  res.status(500).json(err);
  }
}