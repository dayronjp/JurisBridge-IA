import React, { useState } from 'react';
import './IAChat.css'

export default function IAChat() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;
    setCarregando(true);
    setResposta('');

    try {
      const res = await fetch('http://localhost:300/api/ia/perguntar', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({ pergunta })
      });
      const data = await res.json();
      setResposta(data.resposta);
    } catch {
      setResposta('Erro ao obter resposta com a IA.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="ia-chat-container">
      <h1 className="title">JurisBridge AI Assistant</h1>
      <div className="chatbox">
      <textarea
          placeholder="Digite sua pergunta jurídica..."
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          className="input"
        />
        <button onClick={enviarPergunta} disabled={carregando} className="send-btn">
          {carregando ? 'Pensando...' : 'Perguntar'}
        </button>
        <div className="resposta">
          {resposta && <p>{resposta}</p>}
        </div>
      </div>
    </div>
  );
} 

      