import mongoose from "mongoose";

const salsaSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
)

const SAUCE = mongoose.model("salsa",salsaSchema)

export default SAUCE
