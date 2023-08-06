import User from "../models/usuarios.js";
import bcryptjs from "bcryptjs";
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
    }
}

const postUsuario = async (req, res) => {
    try {
        const{email, password, name, adress, phone, role} = req.body;

        const usuario = await new User({email, password, name, adress, phone, role});
        
        /* encriptado */
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        await usuario.save();
        res.json({"message": "Usuario creado"});


    } catch (error) {
        console.log(error);
    }
}

const putUsuario = async (req, res) => {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({"message": "Usuario actualizado", usuario});
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

const delUsuario = async (req, res) => {
    try {
        const usuario = await User.findByIdAndDelete(req.params.id);
        res.json({"message": "Usuario eliminado"});
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

const getUsuario = async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        res.json(usuario);
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsuarios,
    postUsuario,
    putUsuario,
    delUsuario,
    getUsuario
}