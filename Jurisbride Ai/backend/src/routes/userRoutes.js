import express from "express";
import { registerUser, loginUser } from "../../../backend/src/controllers/userController.js";

const router = express.Router();

// Rota de registro
router.post("/register", registerUser);

// 🚀 Adicione esta rota:
router.post("/login", loginUser);

export default router;
