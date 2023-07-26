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
    }
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    }
    phone: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
)

const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario