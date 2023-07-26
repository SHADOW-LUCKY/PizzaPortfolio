import User from "../models/usuarios.js";

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
    }
}

const createUsuario = async (req, res) => {
    try {
        const usuario = await User.create(req.body);
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

const updateUsuario = async (req, res) => {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({"message": "Usuario actualizado"});
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const usuario = await User.findByIdAndDelete(req.params.id);
        res.json({"message": "Usuario eliminado"});
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}