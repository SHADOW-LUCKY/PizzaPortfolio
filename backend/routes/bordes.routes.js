import {Router} from "express";
import {check} from "express-validator";
import {getbord,postbord,delbord,putbord} from "../controllers/bordes.controllers.js";

const router = Router();

router.get("/", getbord);
router.post("/",[
    
], postbord);
router.put("/:id", putbord);
router.delete("/:id", delbord);

export default router;