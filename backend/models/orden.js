import mongoose from "mongoose";

const ordenSchema = new mongoose.Schema(
{
    person: {
        type: Object,
        required: true,
    },
    forma: {
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
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        enum: ["pending","preparing","ready","delivered"],
        default:"pending"    
    }
},
{
    timestamps: true
}
)

export const fillout = mongoose.model("ordenes", ordenSchema);

export default fillout