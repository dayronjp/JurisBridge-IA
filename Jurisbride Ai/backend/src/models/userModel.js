// backend/src/models/userModel.js
import pool from '../db.js';
import bcrypt from 'bcrypt';

export const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};