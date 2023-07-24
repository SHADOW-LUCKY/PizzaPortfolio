import mongoose from "mongoose";

const toppingSchema = new mongoose.Schema(
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
    }
}
{
    timestamps: true
}
)

export default mongoose.model("toppings", toppingSchema);
