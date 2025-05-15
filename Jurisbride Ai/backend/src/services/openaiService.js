import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export async function gerarResposta(pergunta) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini', 
      messages: [
        {
          role: 'user',
          content: pergunta
        }
      ]
    });

    return chatCompletion.choices[0].message.content;
  } catch (err) {
    console.error('Erro ao chamar o OpenAI:', err);
    throw err;
  }
}