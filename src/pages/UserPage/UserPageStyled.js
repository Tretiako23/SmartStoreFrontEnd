import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdminLink = styled(NavLink)`
  border-radius: 20px;

  margin-top: 20px;
  padding: 10px 10px;

  font-weight: var(--fw-bold);
  font-size: var(--fs-md);

  display: block;

  width: fit-content;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(122, 16, 124, 0.7484243697478992) 43%,
    rgba(0, 212, 255, 1) 100%
  );

  color: white;

  &:hover {
    scale: 1.1;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(122, 16, 124, 1) 43%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 20px 0;

  @media (min-width: 768px) {
    width: 50%;
  }

  & > p {
    display: block;
    box-shadow: var(--shadow);
    padding: 10px;
    border-radius: 20px;
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);
    & > span {
      margin-left: auto;
      font-weight: var(--fw-bold);
    }
  }
`;
