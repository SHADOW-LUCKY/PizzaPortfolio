import {Router} from 'express'
import {check} from 'express-validator'
import {getquesos,postquesos,delquesos,putquesos} from '../controllers/quesos.controllers.js' 

const router = Router()

router.get('/', getquesos)
router.post('/',[
    
], postquesos)
router.put('/:id', putquesos)
router.delete('/:id', delquesos)

export default router