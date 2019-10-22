import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
`;

export const PreInfo = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  justify-content: space-between;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #707070;
  }
`;

export const PreviewContract = styled.div`
  width: 800px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;

  thead th {
    color: #1cabef;
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
  }
`;

export const PreviewPerson = styled.div`
  width: 800px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;

  thead th {
    color: #1cabef;
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
  }
`;
