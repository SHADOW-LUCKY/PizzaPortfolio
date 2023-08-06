import {check} from "express-validator";
import {getUsuarios, postUsuario, delUsuario, putUsuario, getUsuario } from "../controllers/usuario.controllers.js";
import {Router} from "express";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/",[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('phone', 'El telefono es obligatorio').not().isEmpty().isLength({min: 10, max: 10}),
    check('adress', 'La direccion es obligatoria').not().isEmpty(),
],  postUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", delUsuario);


export default router;