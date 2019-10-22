import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
`;

export const ContInfo = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  justify-content: space-between;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #707070;
  }

  a {
    text-decoration: none;
    border-radius: 4px;
    border: none;
    background: #1ca8ef;
    font-weight: bold;
    height: 44px;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.03, '#1CA8EF')};
    }
    span {
      font-weight: bold;
      font-size: 12px;
      color: #fff;
    }
  }
`;

export const ContractList = styled.div`
  width: 800px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;

  thead th {
    color: #6f6f6f;
    font-weight: bold;
    text-align: left;
    padding: 12px 24px;
  }

  tbody td {
    color: #6f6f6f;
    font-weight: bold;

    & + td {
      border-bottom: 1px solid #eee;
    }
    padding: 42px 24px;
    text-align: left;

    a {
      text-decoration: none;
      color: #1cabef;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
