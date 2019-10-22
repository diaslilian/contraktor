import React from 'react';

import { Info, PersonRegister, Container } from './styles';

export default function Register() {
  return (
    <Container>
      <Info>
        <span>CADASTRAR PARTES</span>
      </Info>
      <PersonRegister>
        <form>
          <input id="nome" placeholder="NOME" />
          <input id="sobrenome" placeholder="SOBRENOME" />
          <input type="email" id="email" placeholder="EMAIL" />
          <input id="cpf" placeholder="CPF" />
          <input id="telefone" placeholder="TELEFONE" />
          <button type="submit">FINALIZAR</button>
        </form>
      </PersonRegister>
    </Container>
  );
}
