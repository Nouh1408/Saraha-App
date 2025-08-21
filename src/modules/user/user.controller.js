import { Router } from "express";
import { deleteAccount } from "./user.service.js";
const router = Router()
router.delete("/:id", deleteAccount)
export default router