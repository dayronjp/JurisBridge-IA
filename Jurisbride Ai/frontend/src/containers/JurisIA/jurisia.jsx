import React, { useState } from "react";
import axios from "axios";

const Jurisia = () => {
  const [inputData, setInputData] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => setInputData(e.target.value);

  const handleSubmit = async () => {
    if (!inputData.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:3000/api/chat', { prompt: inputData });
      setResult(response.data.answer);
    } catch {
      setError('エラーが発生しました。Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#121212",
      color: "#e0e0e0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem",
      fontFamily: "Inter, sans-serif",
    }}>
      <header style={{ marginBottom: 32, textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 600 }}>JurisIA</h1>
        <p style={{ fontSize: "1rem", opacity: 0.6 }}>
          Sua ponte entre Direito e Inteligência Artificial — 聞いてもええで
        </p>
      </header>

      <div style={{
        width: "100%",
        maxWidth: 720,
        background: "#1E1E1E",
        borderRadius: "12px",
        padding: 24,
        boxShadow: "0 0 0 1px #2a2a2a",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
        <textarea
          rows={5}
          placeholder="Pergunte algo jurídico ou geral aqui..."
          value={inputData}
          onChange={handleInputChange}
          style={{
            background: "#2a2a2a",
            color: "#f1f1f1",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            fontFamily: "inherit",
            resize: "vertical",
            outline: "none",
          }}
          disabled={loading}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: "#4f46e5",
            color: "#fff",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: 8,
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
            fontWeight: 500,
          }}
          onMouseEnter={e => !loading && (e.currentTarget.style.backgroundColor = "#4338ca")}
          onMouseLeave={e => !loading && (e.currentTarget.style.backgroundColor = "#4f46e5")}
        >
          {loading ? "Consultando JurisIA..." : "Enviar"}
        </button>

        {error && (
          <p style={{ color: "#ef4444", marginTop: 8 }}>
            {error}
          </p>
        )}

        {result && (
          <div style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            whiteSpace: "pre-wrap",
            maxHeight: 320,
            overflowY: "auto",
            fontFamily: "monospace",
            fontSize: "0.95rem",
          }}>
            {result}
          </div>
        )}
      </div>

      <footer style={{
        marginTop: 40,
        fontSize: 13,
        color: "#888",
        opacity: 0.5,
        fontStyle: "italic",
      }}>
      </footer>
    </div>
  );
};

export default Jurisia;
