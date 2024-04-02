import styled from 'styled-components';

export const AuthModalWrap = styled.div`
  max-width: 440px;
  height: auto;
  min-width: 300px;

  @media (min-width: 410px) and (max-width: 767px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 440px;
  }

  background-color: var(--colors-bg);

  border-radius: 20px;
`;

export const AuthTitleWrap = styled.div`
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;

  padding: 20px;
  background-color: var(--colors-ui-base);

  @media screen and (min-width: 1512px) {
  }
`;
export const Form = styled.form`
  padding: 20px;
  & > div:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    color: red;
    font-weight: var(--fw-bold);
  }
`;

export const Label = styled.label``;
export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  max-width: 100%;

  padding-left: 12px;
  padding-right: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
export const TogglePassWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  & > svg {
    color: black;
  }
`;

export const SubmitFormBtn = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  font-size: var(--fs-bold);
  border-radius: 20px;
  margin-top: 20px;

  color: var(--color-text);
  background-color: #1365a6;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
`;

export const ToggleLoginWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;

  & > button {
    border: none;
    cursor: pointer;
    font-weight: var(--fw-normal);
    background: none;
    color: var(--colors-text);
    text-decoration: underline;

    &:hover {
      scale: 1.1;
    }
  }
`;
