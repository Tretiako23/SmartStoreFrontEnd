import styled from 'styled-components';

export const BurgerMenuWrap = styled.div`
  display: none;

  @media (min-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const BurgerMenuModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 80%;
  padding: 20px;

  color: var(--colors-text);
  background-color: var(--colors-ui-base);

  & > nav > ul {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
`;
