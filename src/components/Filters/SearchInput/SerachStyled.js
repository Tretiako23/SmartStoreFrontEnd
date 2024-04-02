import styled from 'styled-components';

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Введіть назву товару для пошуку...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  width: 100%;
`;

export const SearchInputWrap = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--b-radius);
  box-shadow: var(--shadow);
  width: 100%;

  // margin: 1rem auto;

  @media (min-width: 767px) {
    // margin-bottom: 0;
    // width: 280px;
  }
  cursor: text;

  & > svg {
    cursor: pointer;
  }
`;
