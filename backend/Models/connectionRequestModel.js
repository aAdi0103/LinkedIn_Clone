import mongoose from "mongoose";

const connectionRequestSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["accepted", "pending", "rejected"], // the enum option is used to specify a predefined set of valid values for a string field.
            default: "pending"
        },
       
    },
    { timestamps: true }
);

const connectionRequest = mongoose.model("connectionRequest", connectionRequestSchema);

export default connectionRequest;
