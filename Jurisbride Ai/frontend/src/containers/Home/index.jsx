import { Title } from "./styles.js";
import { Link } from 'react-router-dom';
import Globalstyles from "../../styles/globalstyles.js";
import styled from "styled-components";
import logo from "../../assets/logo_jb.png"; 

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;  
  margin-block-start: 20px;
  transition: all 0.3s ease;  

  &:hover {
    color: purple;  
    transform: scale(1.1);  
    text-shadow: 0 0 5px rgba(128, 0, 128, 0.6);  
  }
`;

const SearchBar = styled.input`
  display: block;
  inline-size: 250px;
  padding: 8px 12px;
  margin-block-start: 20px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 14px;
  background-color: transparent;
  color: white;
  text-align: center;
  transition: all 0.3s ease;
  margin-inline-start: auto;
  margin-inline-end: auto;

  &:focus {
    border-color: purple;
    outline: none;
  }

  &::placeholder {
    color: white;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  inset-block-start: 13px;
  inset-inline-start: 20px;
  inline-size: 95px; 
  block-size: auto;
`;

function Home() {
  return (
    <div>
      <Globalstyles />
      <Logo src={logo} alt="Logo" />
      <Title>JurisBridge AI</Title>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/register">Registre-Se</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/jurisia">Juris IA</StyledLink>
      <StyledLink to="/conectese">Conecte-se com um Advogado</StyledLink>
      <SearchBar type="text" placeholder="Como posso te ajudar hoje?" />
    </div>
  );
}

export default Home;
