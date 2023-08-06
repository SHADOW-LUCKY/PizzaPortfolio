import {check} from "express-validator";
import {getOrden, createOrden, updateOrden, deleteOrden } from "../controllers/orden.controllers.js";
import {Router} from "express";

const router = Router();

router.get("/", getOrden);
router.post("/",[
    
], createOrden);
router.put("/:id", updateOrden);
router.delete("/:id", deleteOrden);

export default router

