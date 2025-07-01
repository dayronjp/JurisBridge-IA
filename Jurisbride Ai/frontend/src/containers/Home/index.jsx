import { Link } from 'react-router-dom';
import Globalstyles from "../../styles/globalstyles.js";
import styled from "styled-components";
import logo from "../../assets/logo_jb.png";
import TypingEffect from '../../components/TypingEffect/Typing.jsx';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;  
  margin-block-start: 20px;
  transition: all 0.3s ease;
  border: 2px solid #ddd;
  border-radius: 25px;
  margin-inline-start: 10px;
  margin-inline-end: 10px;

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
  margin-block-end: 25px;
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
  inset-inline-end: 20px;
  inline-size: 130px;
  block-size: auto;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1))
          drop-shadow(0 0 12px rgba(128, 0, 128, 0.4));
  animation: fadeInScale 1s ease-out forwards;

  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.85) translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.15))
            drop-shadow(0 0 20px rgba(128, 0, 128, 0.6));
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  width: 100%;
  margin: 40px 0;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 30px rgba(255, 255, 255, 0.2);
  opacity: 0.9;
  animation: pulseGlow 2s ease-in-out infinite;

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow:
        0 0 10px rgba(255, 255, 255, 0.6),
        0 0 20px rgba(255, 255, 255, 0.3),
        0 0 30px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow:
        0 0 15px rgba(255, 255, 255, 0.9),
        0 0 30px rgba(255, 255, 255, 0.5),
        0 0 45px rgba(255, 255, 255, 0.3);
    }
  }
`;



function Home() {
  return (
    <div>
      <Globalstyles />
      <Logo src={logo} alt="Logo" />
      <SearchBar type="text" placeholder="Como posso te ajudar hoje?" />
      <StyledLink to="/register">Registre-Se</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/jurisia">Juris IA</StyledLink>
      <StyledLink to="/conectese">Conecte-se com um Advogado</StyledLink>
      <Divider />
      <TypingEffect />
    </div>
  );
}

export default Home;
