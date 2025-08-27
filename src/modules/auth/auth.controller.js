import { Router } from "express";
import  {login, register, resendOTP, verifyAccount} from './auth.service.js'
const router = Router()
router.post("/register",register )
router.post("/login",login)
router.post('/verify-user',verifyAccount)
router.post('/resend-OTP', resendOTP)
export default router