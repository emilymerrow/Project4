const Chore = require("../models/chore");


module.exports = {
    createChore,
    updateChore,
    deleteChore,
    indexChore,
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


async function indexChore(req, res) {
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

async function markChoreAsComplete(req, res) {
    try {
        //extract the choreId and userId from the request
    }
}



