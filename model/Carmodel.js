import mongoose from "mongoose";

const Schema = mongoose.Schema;

const carmodelSchema = new Schema({
    carname: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },
    price: {   
        type: Number,
        required: true,
    },
    fuel: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    bodytype: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    brands: {
        type: mongoose.Types.ObjectId, // This is a reference to the 'Brand' model
        ref : "Brand", // Reference to the 'Brand' model
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Carmodel", carmodelSchema);