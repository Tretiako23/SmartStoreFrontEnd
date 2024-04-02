import styled from 'styled-components';

export const InputsWrap = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #dee2e6;
  border-radius: var(--b-radius-sm);

  font-weight: var(--fw-bold);
  color: black;

  & > input {
    padding: 6px 12px;

    width: 100%;
    height: 34px;
    border: none;
    border-radius: var(--b-radius-sm);

    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    background-color: var(--colors-bg);
  }
`;
