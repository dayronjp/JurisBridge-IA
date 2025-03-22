// src/routes/userRoutes.js
import express from 'express';
import { registerUser } from '../../../backend/src/controllers/userController.js';

const router = express.Router();

// Rota de registro
router.post('/register', registerUser);

export default router;