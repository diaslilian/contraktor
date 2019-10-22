import styled from 'styled-components';

import background from '../../assets/images/background.png';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px rgb(0, 0, 0, 0.25);
  border-radius: 2px;

  height: 200px;
  width: 100%;
  background: url(${background});

  img {
    top: 30px;
    left: 700px;
    max-width: 300px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
