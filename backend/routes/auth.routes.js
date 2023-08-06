import{Router} from "express";
import{check} from "express-validator";
import errors from "../middlewares/errors.js";
import login from "../controllers/auth.controllers.js"

const router = Router()

router.post("/",[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    errors
],login)

export default router