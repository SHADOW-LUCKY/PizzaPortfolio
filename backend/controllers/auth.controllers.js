import {response} from 'express'
import Usuario from '../models/usuarios.js'
import generateJWT from '../middlewares/generateJWT.js'
import bcryptjs from 'bcryptjs'


const login = async (req, res = response) => {
    const {email, password} = req.body
    try {
        const usuario = await Usuario.findOne({email})
        if(!usuario){
            return res.status(400).json({
                msg: "usuario no existe en la base de datos"
            })
        }
        if (!bcryptjs.compareSync(password, usuario.password)) {
            return res.status(400).json({
                msg: "contraseña incorrecta"
            })
        }
        const token = await generateJWT(usuario.id)

        return res.json({result:"access granted", token})
    }
    catch (error) {
        console.log(error)
    }
}

export default login