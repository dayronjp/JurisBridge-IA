import React, { useState} from "react";
import { Link } from "react-router-dom";
import Globalstyles from "../../styles/globalstyles";
import axios from "axios";

const Jurisia = () => {
    const [inputData, setInputData] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);


    const handleInputChange = e => {
        setInputData(e.target.value);
    };

    const handleSubmit = async () => {
        if (!inputData) return;

        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('URL_DA_API', { data: inputData });
        } catch (err) {
            setError('Ocorreu um erro ao processar os dados. Tente novamente.');
          } finally {
            setLoading(false);
          }
        };
      
        return (
          <div className="ia-component">
            <h2>Componente de IA</h2>
            <div className="input-area">
              <textarea
                value={inputData}
                onChange={handleInputChange}
                placeholder="Digite seus dados para IA..."
              />
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Processando...' : 'Enviar para IA'}
              </button>
            </div>
      
            {error && <div className="error">{error}</div>}
      
            {result && (
              <div className="result">
                <h3>Resultado:</h3>
                <pre>{JSON.stringify(result, null, 2)}</pre> {/* formatar resultado */}
              </div>
            )}
          </div>
        );
      };
      
export default Jurisia

    

    


