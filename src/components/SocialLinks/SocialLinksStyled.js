import styled from "styled-components";

export const SocialLinksWrap = styled.div``;

export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocialLinksItem = styled.li`
  cursor: pointer;
`;

export const SocialLink = styled.a`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  background-color: var(--colors-bg);
  justify-content: center;
  border-radius: 50%;
  color: var(--colors-text);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--accent-color);
    color: white;
  }

  & > svg {
    border-radius: 50%;
  }
`;
