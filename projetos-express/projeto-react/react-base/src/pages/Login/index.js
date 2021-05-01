import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }
  return (
    <Container>
      <Title>
        Login
        <small>Ola</small>
      </Title>
      <Paragrafo>lorem ipsum</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
