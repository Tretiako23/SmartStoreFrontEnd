import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;

  padding: 0 1rem;
  margin: 10px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--b-radius);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    font-weight: var(--fw-bold);
  }
`;

export const Title = styled.h2`
  max-width: 280px;
  margin-bottom: 80px;

  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
    max-width: 460px;

    & br {
      display: none;
    }
  }
`;
