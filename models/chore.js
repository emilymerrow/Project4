//define the schema here
const mongoose = require("mongoose");

const choreSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        isCompleted: { type: Boolean, default: false },
        assignedChild: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rewardAmount: { type: Number, required: true },

    }, {
        timestamps: true,
    }
);

module.exports = mongoose.model("Chore", choreSchema);