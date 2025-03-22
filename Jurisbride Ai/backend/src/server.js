import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';


// Inicializa o aplicativo Express
const app = express();

// Configura o CORS para permitir requisições do frontend
app.use(cors());

// Habilita o parsing de JSON no corpo das requisições
app.use(express.json());

// Define as rotas
app.use('/api/users', userRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});