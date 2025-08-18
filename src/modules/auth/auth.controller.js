import { Router } from "express";
import  {register} from './auth.service.js'
const router = Router()
router.post("/register",register )
export default router