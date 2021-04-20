import React from 'react';
import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Ola</small>
      </Title>
      <Paragrafo>lorem ipsum</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
