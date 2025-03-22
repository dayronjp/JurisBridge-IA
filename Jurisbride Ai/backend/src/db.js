// src/db.js
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // URL do NeonDB
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool; // Exportação padrão