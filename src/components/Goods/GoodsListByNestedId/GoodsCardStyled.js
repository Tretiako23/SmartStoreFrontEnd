import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardItemWrap = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1023px) {
    max-width: 300px;
  }

  max-width: 350px;

  padding: 20px;

  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;
  background-color: var(--colors-bg);

  & > div:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    background-color: hsl(243.69deg 16.79% 90.54% / 81%);
  }

  body[data-theme='dark'] &:hover {
    background-color: hsl(210 73% 24% / 1);
  }
`;

export const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DiscountWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 5px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  & > span {
    color: white;
    background-color: #eb5757;
    font-size: 10px;
    padding: 5px 8px;

    & + span {
      background-color: rgb(0, 120, 255);
    }
  }
`;

export const FavoritesWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 5px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    height: 200px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > div > span {
    color: #cbcfd4;
    font-size: var(--fs-md);
    text-decoration: line-through;
    & + span {
      margin-left: 10px;
      color: var(--colors-text);
      font-weight: var(--fw-bold);
      text-decoration: none;
    }
  }
`;

export const StarWrap = styled.div`
  width: fit-content;
  margin: 0px auto;

  & > svg {
    @media (min-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const AmountWrap = styled.div`
  width: fit-content;
  margin: 0px auto;
`;
export const BuyBtn = styled.button`
  display: block;
  width: calc(100% - 30px);
  padding: 8px 0;
  margin: 0 auto;

  border-radius: var(--b-radius);
  border: var(--border-base);

  box-shadow: var(--shadow);

  text-transform: uppercase;
  color: var(--colors-text);
  font-size: var(--fs-sd);
  font-weight: var(--fw-normal);

  background-color: hsl(0deg 7.6% 81.25% / 38%);

  transition: background 0.15s ease 0.05s;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.7);
  }
`;
