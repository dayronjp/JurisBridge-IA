import { Link } from "react-router-dom";
import styled from "styled-components";
import Globalstyles from "../../styles/globalstyles.js";
import bgImage from "../../assets/bridgejai.png";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const LeftSide = styled.div`
  flex: 1.2;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5) blur(1px);
`;

const RightSide = styled.div`
  flex: 1;
  background: rgba(18, 16, 32, 0.92);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: #eaeaff;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.2rem;
  text-shadow: 0 0 18px #7e6cff88;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #d0cfff;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #a69bff;
  font-weight: 600;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ButtonLink = styled(Link)`
  background: linear-gradient(145deg, #7e6cff, #b4a9ff);
  color: #1e1846;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.9rem 1.6rem;
  border-radius: 40px;
  text-decoration: none;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 18px #b4a9ff99;
  }
`;

function Conectse() {
  return (
    <>
      <Globalstyles />
      <PageWrapper>
        <LeftSide />

        <RightSide>
          <Title>Comece agora com a <Highlight>JurisBridge</Highlight></Title>

          <Subtitle>
            Para <Highlight>acessar o atendimento jurídico</Highlight> com um profissional,
            é necessário ter uma conta ativa. A plataforma permite salvar seu histórico de dúvidas,
            conversar em tempo real e <Highlight>receber assistência personalizada</Highlight>.
          </Subtitle>

          <CTA>
            <ButtonLink to="/login">Entrar na minha conta</ButtonLink>
            <ButtonLink to="/register">Criar uma nova conta</ButtonLink>
          </CTA>
        </RightSide>
      </PageWrapper>
    </>
  );
}

export default Conectse;
