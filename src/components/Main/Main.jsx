/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Container } from '../Container';

const MainEl = styled.main`
  padding: 2rem 0;
  @media (min-with: 767px) {
    padding: 4rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <MainEl>
      <Container>{children}</Container>
    </MainEl>
  );
};

export default Main;
