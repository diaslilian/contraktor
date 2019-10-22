import React from 'react';
import { Link } from 'react-router-dom';

import { ContInfo, ContractList, Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <ContInfo>
        <span>LISTA CONTRATOS</span>
        <Link to="/contract">
          <span>NOVO CONTRATO</span>
        </Link>
      </ContInfo>

      <ContractList>
        <thead>
          <tr>
            <th />
            <th />
            <th>Título</th>
            <th>Nº Contrato</th>
            <th>Data Ínicio</th>
            <th>Data Vencimento</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td>
              <a href="/preview">Contrato 001</a>
            </td>
            <td>
              <span>0012576020019</span>
            </td>
            <td>
              <span>29/10/2019</span>
            </td>
            <td>
              <span>29/10/2021</span>
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <a href="/preview">Contrato 002</a>
            </td>
            <td>
              <span>0012576020019</span>
            </td>
            <td>
              <span>29/10/2019</span>
            </td>
            <td>
              <span>29/10/2021</span>
            </td>
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <a href="/preview">Contrato 003</a>
            </td>
            <td>
              <span>0012576020019</span>
            </td>
            <td>
              <span>29/10/2019</span>
            </td>
            <td>
              <span>29/10/2021</span>
            </td>
          </tr>
        </tbody>
      </ContractList>
    </Container>
  );
}
