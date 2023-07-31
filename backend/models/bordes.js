import mongoose from "mongoose"

const bordeSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        unique: true,
    },
    available: {
        type: Boolean,
        default: true,
        required: true,
    },
    imagen:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
)

const BORD = mongoose.model("bordes",bordeSchema)

export default BORD