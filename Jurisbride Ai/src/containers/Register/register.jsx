import React, { useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  max-inline-size: 400px;
  margin: 50px auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-block-end: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-block-end: 1.2rem;
`;

const Label = styled.label`
  margin-block-end: 0.5rem;
  display: block;
  color: #555;
`;

const Input = styled.input`
  inline-size: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  background: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #7f5af0;
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-block-end: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: linear-gradient(45deg, #7f5af0, #f15bb5);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados para uma API ou realizar validações
  };

  return (
    <RegisterContainer>
      <Title>Registrar-se</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Registrar</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
