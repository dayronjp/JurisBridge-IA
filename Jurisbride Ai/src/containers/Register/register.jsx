import React, { useState } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  max-inline-size: 400px;
  margin: 50px auto;
  padding: 2rem;
  background: #fff; /* Fundo branco */
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-block-end: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-block-end: 0.5rem;
  color: #555;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background: #f8f8f8;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #7f5af0;
    outline: none;
    box-shadow: 0 0 8px rgba(127, 90, 240, 0.2);
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  text-align: center;
  font-size: 0.9rem;
  margin-block-start: -0.5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #7f5af0, #916bff); /* Gradiente azul-violeta */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(127, 90, 240, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(127, 90, 240, 0.5);
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

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    console.log("Formulário enviado:", formData);
  };

  return (
    <RegisterContainer>
      <Title>Registrar-se</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Registrar</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;