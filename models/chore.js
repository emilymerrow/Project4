const mongoose = require('mongoose');

const ChoreSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignedChild: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    totalSavings: {
        type: Number,
        default: 0
    },
    childName: { 
        type: String,
        required: true,
    },
    assignedSchedule: {
        type: String,
    }
});



// method to complete a chore and update the savings
// define the completeChore method for the ChoreSchema
ChoreSchema.methods.completeChore = async function (userId) {
    // Set the isCompleted field of the chore to true, marking it as completed
    this.isCompleted = true;
    // import the user model to perform operations on the user collection
    const User = mongoose.model('User');
    // Find the user document in the database with the given userId
    const user = await User.findById(userId);
    //Add the chore's amount to the user's savings
    user.savings += this.amount;
    //save the updated user document to the database
    await user.save();
    //save the updated chore document to the database and return the saved document
    return this.save();
};



module.exports = mongoose.model('Chore', ChoreSchema);
