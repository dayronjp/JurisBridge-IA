import pool from '../db.js'; // Supondo que você tenha uma configuração de pool de conexão no arquivo db.js
import bcrypt from 'bcrypt';

// Função de registro
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
    delete user.password; // Remover a senha antes de enviar a resposta
    res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// Função de login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas!' });
    }

    const user = result.rows[0];

    // Verifica a senha
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Credenciais inválidas!' });
    }

    // Retorna os dados do usuário, sem a senha
    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};
