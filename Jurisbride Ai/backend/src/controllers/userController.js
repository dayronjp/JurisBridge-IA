// src/controllers/userController.js
import pool from '../db.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verifica se o e-mail já está cadastrado
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere o usuário no banco de dados
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    // Retorna o usuário criado (sem a senha)
    const user = result.rows[0];
    delete user.password;
    res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};