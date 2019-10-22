import React from 'react';

import {
  Container,
  PreInfo,
  PreviewContract,
  PreviewPerson,
  Link,
} from './styles';

export default function Preview() {
  return (
    <Container>
      <PreInfo>
        <span>CONTRATO</span>
      </PreInfo>

      <PreviewContract>
        <thead>
          <tr>
            <th></th>
            <th>Nº Contrato</th>
            <th>Data Ínicio</th>
            <th>Data Vencimento</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
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
      </PreviewContract>

      <PreviewPerson>
        <thead>
          <tr>
            <th>Partes do Contrato</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Lilian Dias</span>
            </td>
            <td>
              <span>024.235.845-00</span>
            </td>
            <td>
              <span>nomesobrenome@gmail.com</span>
            </td>
            <td>
              <span>11 99956-4587</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Juliana Mascarenhas</span>
            </td>
            <td>
              <span>054.845.862-00</span>
            </td>
            <td>
              <span>nomesobrenome@gmail.com</span>
            </td>
            <td>
              <span>11 99878-2497</span>
            </td>
          </tr>
        </tbody>
      </PreviewPerson>
    </Container>
  );
}
