import mongoose from "mongoose";

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Brand", brandSchema);
// brands