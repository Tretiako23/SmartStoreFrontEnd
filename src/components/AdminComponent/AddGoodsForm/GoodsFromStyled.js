import styled from 'styled-components';

export const FormWrap = styled.div`
  width: 70%;
  border: 1px solid var(--accent-color);
  border-radius: 20px;
  margin: 20px auto;

  & > form > button {
    margin-top: 20px;
    & + button {
      margin-left: 10px;
    }
  }

  & > form > div {
    border: var(--border-base);
    border-radius: 20px;
    padding: 10px;
    & > button {
      margin-top: 10px;
      max-width: 200px;
      cursor: pointer;
      margin-left: auto;
    }
  }
`;
