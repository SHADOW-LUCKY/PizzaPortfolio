import mongoose from "mongoose";

const quesoSchema = new mongoose.Schema(
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


const CHEESE = mongoose.model("queso_base",quesoSchema)

export default CHEESE