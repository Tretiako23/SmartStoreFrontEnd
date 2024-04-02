import styled from 'styled-components';

export const ShopingCartWrap = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  cursor: pointer;
`;

export const ShopingCount = styled.span`
  position: absolute;
  top: -15px;
  right: -15px;

  color: var(--color-text);
  display: grid;
  place-items: center;
  font-size: var(--fs-md);
`;
