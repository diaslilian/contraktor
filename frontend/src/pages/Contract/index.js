import React from 'react';

import { Info, NewContract, Container } from './styles';

export default function Contract() {
  return (
    <Container>
      <Info>
        <span>NOVO CONTRATO</span>
      </Info>
      <NewContract>
        <form>
          <input id="titulo" placeholder="TÍTULO" />
          <input id="numcontract" placeholder="NÚMERO DO CONTRATO" />
          <input id="datainit" placeholder="DATA INÍCIO" />
          <input id="dataexpiry" placeholder="DATA VENCIMENTO" />

          <label htmlFor="contrato">
            <input type="file" id="contrato" accept="application/pdf" />
          </label>

          <button type="submit">Próximo</button>
        </form>
      </NewContract>
    </Container>
  );
}
