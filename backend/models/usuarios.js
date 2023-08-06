import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
{
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin","client","employee"],
        default:"client"
    }
},
{
    timestamps: true
}
)

const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario