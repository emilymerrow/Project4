const Chore = require("../models/chore");


module.exports = {
    createChore,
    updateChore,
    deleteChore,
    indexChore,
    completeChore,
};

const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const { v4: uuidv4 } = require('uuid')
const BUCKET_NAME = process.env.BUCKET


async function createChore(req, res) {
    console.log(req)
    try {
        const chore = new Chore({
            title: req.body.title,
            description: req.body.description,
            assignedChild: req.user._id,
            amount: req.body.amount,
        });

        await chore.save();
        await chore.populate('assignedChild');

        res.status(201).json({ data: chore });

    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Error creating chore' });
    }
}


async function indexChore(req, res) { // listing of thee model
    try {
        const chores = await Chore.find({}).populate('assignedChild').exec()
        res.status(200).json({ chores: chores })
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Error fetching chores' });
    }
}

async function updateChore(req, res) {
    try {
        const chore = await Chore.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!chore) {
            return res.status(404).json({ error: "Chore not found" });
        }

        res.status(200).json(chore);

    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Error updating chore' });
    }
}

async function deleteChore(req, res) {
    try {
        const deletedChore = await Chore.findByIdAndDelete(req.params.id);

        if (!deletedChore) {
            return res.status(404).json({ error: "Chore not found" });
        }

        res.status(200).json(deletedChore);

    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Error deleting chore' });
    }
}

async function completeChore(req, res) {
    console.log(req.body);
    try {
        //extract the choreId and userId from the request param. and body
        const { id } = req.params;
        
        // extract the isCompleted value from the request body
        const { isCompleted } = req.body;

        //Find the chore in the database by its ID
        const chore = await Chore.findById(id);

        // If the chore doesn't exist, return a 404 error
        if (!chore) {
            return res.status(404).json({message: 'Chore not found'});
        }
        chore.isCompleted = isCompleted;
        await chore.save();
        
    // Call the completeChore method on the chore and pass in the userId
    // await chore.completeChore(userId);

    res.status(200).json({ message: 'Chore marked as complete and savings updated'});

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error'});
    }
}



