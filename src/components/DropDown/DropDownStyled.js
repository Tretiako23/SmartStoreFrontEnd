import styled from 'styled-components';

export const DropdownItemContainer = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--colors-text);
  border-radius: 20px;

  cursor: pointer;

  & > a,
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 70px;
    height: 50px;
    padding: 0 8px;

    & > svg {
      transform: rotate(0deg);
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &:not(:first-child):hover {
    border-color: var(--accent-color);
  }
  &:first-child:hover {
    border-color: ${({ $isHover }) => $isHover && 'var(--accent-color)'};
  }

  & > a,
  & > div > svg {
    color: ${({ $isHover }) => $isHover && 'var(--accent-color)'};
    transform: ${({ $isHover }) => $isHover && ' rotate(180deg)'};
  }

  &:hover {
    .dropdown-content {
      display: block;
    }
    & > a {
      color: var(--accent-color);
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;

  top: 102%;
  left: 0;

  border-radius: 5px;

  background-color: var(--colors-bg);
  min-width: 160px;

  box-shadow: var(--shadow);
  z-index: 1;
`;

export const DropdownItem = styled.li`
  color: var(--color-text);

  border-radius: 5px;

  // position: relative;

  &:hover {
    background-color: hsl(0deg 7.6% 81.25% / 38%);
    color: var(--color-text);

    .nested-dropdown-content {
      display: flex;
    }
  }
  & > a {
    border-radius: 5px;
    padding: 12px 16px;
    display: block;
  }
`;
