import mongoose from "mongoose";

const ordenSchema = new mongoose.Schema(
{
    person: {
        type: String,
        required: true,
    },
    toppings: {
        type: Array,
        required: true,
    },
    cheese: {
        type: String,
        required: true,
    },
    sauce: {
        type: String,
        required: true,
    },
    borders: {
      type: String,
      required: true  
    },
    total: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
)

export const fillout = mongoose.model("ordenes", ordenSchema);