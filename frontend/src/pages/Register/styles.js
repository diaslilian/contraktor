import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
`;

export const Info = styled.div`
  margin-top: 20px;
  width: 800px;
  margin: 0 auto;

  span {
    font-size: 20px;
    color: #707070;
    font-weight: bold;
  }
`;

export const PersonRegister = styled.div`
  margin: 30px auto;
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px rgb(0, 0, 0, 0.25);
  padding: 30px;
  display: flex;

  form {
    padding: 6px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    input {
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 35px;
      margin-top: 20px;
      width: 700px;
      padding: 5px 10px;
      border-radius: 4px;
      color: #333;
    }
    button {
      align-self: flex-end;
      margin-top: 15px;
      border-radius: 4px;
      border: none;
      background: #ff6600;
      height: 44px;
      padding: 5px 10px;
      color: #fff;

      &:hover {
        background: ${darken(0.03, '#ff6600')};
      }
    }
  }
`;
