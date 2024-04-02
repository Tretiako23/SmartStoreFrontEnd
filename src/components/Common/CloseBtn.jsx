/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const CloseButton = styled.button`
  display: grid;
  place-content: center;
  padding: 0;

  background-color: inherit;

  border: none;
  border-radius: 50%;

  cursor: pointer;
  & > svg {
    fill: var(--colors-text);
  }

  &:hover,
  &:focus {
    box-shadow: 5px 5px 11px -3px rgba(0, 0, 0, 0.75);
    & > svg {
      fill: #f84147;
    }
  }
`;

const CloseBtn = ({ toggleModal }) => {
  return (
    <CloseButton type="button" onClick={toggleModal}>
      <MdClose size={'30px'} />
    </CloseButton>
  );
};

export default CloseBtn;
