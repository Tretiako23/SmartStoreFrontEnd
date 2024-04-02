import styled from 'styled-components';
import UkrPostPng from '../../assets/ukrPoshtaPng.png';

export const MethodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MethodItem = styled.li`
  display: grid;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 100px 1fr;
  }

  padding: 10px;

  box-shadow: var(--shadow);
  border: var(--border-base);
  margin-top: 10px;

  & > svg,
  & > div > svg {
    width: 100px;
    height: 70px;
    border: var(--border-base);
  }

  & > div {
    & > p {
      margin-top: 10px;
    }
  }
`;

export const UkrPostLogo = styled.div`
  width: 100px;
  height: 70px;
  border: var(--border-base);
  background-image: url(${UkrPostPng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
