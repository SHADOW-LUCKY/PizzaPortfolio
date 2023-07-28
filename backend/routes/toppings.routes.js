import {Router} from "express";
import {createTopping,deleteTopping,updateTopping,getToppings} from '../controllers/toppings.controllers.js';
import {check} from "express-validator";

const router = Router();

router.get("/", getToppings);
router.post("/",createTopping);
router.put("/:id", updateTopping);
router.delete("/:id", deleteTopping);

export default router;

