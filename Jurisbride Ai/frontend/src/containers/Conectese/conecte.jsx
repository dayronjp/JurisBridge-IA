import { Link } from 'react-router-dom';
import { Title } from '../Home/styles'; 
import Globalstyles from "../../styles/globalstyles.js";

function Conectse() {
    return (
        <div>
            <Globalstyles />
            <Title>Conecte-se com um Advogado</Title>
            <p>Já tem uma conta?</p>
            <Link to="/login">Entrar</Link>
            <p>Não tem uma conta?</p>
            <Link to="/register">Cadastrar</Link>
        </div>
    );
}

export default Conectse;