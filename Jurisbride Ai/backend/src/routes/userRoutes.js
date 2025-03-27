// src/routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../../../backend/src/controllers/userController.js';

const router = express.Router();

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

export default router;
