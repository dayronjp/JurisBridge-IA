import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Globalstyles from "../../styles/globalstyles.js";

// Lista de advogados simulada
const advogados = [
    {
        nome: 'Dr. João Silva',
        descricao: 'Especialista em Direito Civil',
        foto: 'https://via.placeholder.com/100' // Imagem temporária
    },
    {
        nome: 'Dra. Maria Oliveira',
        descricao: 'Especialista em Direito Penal',
        foto: 'https://via.placeholder.com/100'
    }
];

// Estilos
const Container = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    min-block-size: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    font-size: 2em;
    color: #333;
    margin-block-end: 20px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    inline-size: 80%;
    max-inline-size: 1000px;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
`;

const ProfilePic = styled.img`
    inline-size: 100px;
    block-size: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-block-end: 10px;
    border: 2px solid #ddd;
`;

const CardTitle = styled.h2`
    font-size: 1.5em;
    color: #333;
`;

const CardDescription = styled.p`
    font-size: 1em;
    color: #666;
    margin-block-end: 15px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-block-start: 20px;
    color: #007bff;
    text-decoration: none;
    font-size: 1.2em;

    &:hover {
        text-decoration: underline;
    }
`;

function ConecteSeComAdvogado() {
    return (
        <Container>
            <Globalstyles />
            <Header>Conecte-se com um Advogado</Header>
            <Grid>
                {advogados.map((advogado, index) => (
                    <Card key={index}>
                        <ProfilePic src={advogado.foto} alt={advogado.nome} />
                        <CardTitle>{advogado.nome}</CardTitle>
                        <CardDescription>{advogado.descricao}</CardDescription>
                        <Button>Ver Detalhes</Button>
                    </Card>
                ))}
            </Grid>
            <BackLink to="/">← Voltar para Home</BackLink>
        </Container>
    );
}

export default ConecteSeComAdvogado;
