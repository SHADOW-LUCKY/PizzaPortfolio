import {Router} from 'express'
import {check} from 'express-validator'
import {getsalsa,postSalsa,delSalsa,putSalsa} from '../controllers/salsas.controllers.js'

const router = Router()

router.get('/', getsalsa)
router.post('/',[
    
], postSalsa)
router.put('/:id', putSalsa)
router.delete('/:id', delSalsa)

export default router