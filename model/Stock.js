import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    carmodels: {
        type: mongoose.Types.ObjectId, 
        ref: "Carmodel", 
        required: true 
    },
    quantity: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model("Stock", stockSchema);

