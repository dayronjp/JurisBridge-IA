import express from 'express';
import { gerarResposta } from '../services/openaiService.js';

const router = express.Router();

router.post('/perguntar', async (req, res) => {
    const { pergunta } = req.body;
    if (!pergunta) return res.status(400).json({ erro: 'Sem a pergunta não há resposta!'});

    try {
        const resposta = await gerarResposta(pergunta);
        res.json({ resposta });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao gerar resposta com a IA.' });
    }
});
export default router