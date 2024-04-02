import styled from 'styled-components';

export const CatalougeList = styled.ul`
  position: absolute;

  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  top: 102%;
  left: 0;

  border-radius: 5px;

  min-width: 160px;
  // box-shadow: var(--shadow);

  // filter: drop-shadow(0 -6mm 4mm #2196f3);
  background-color: var(--colors-bg);

  z-index: 1;
`;

export const Catalougeitem = styled.li`
  padding: 10px;
  min-width: 160px;

  border-radius: 5px;

  overflow: hidden;

  // background-color: hsl(243.69deg 16.79% 90.54% / 81%);

  box-shadow: var(--shadow);

  &:hover {
    background-color: var(--colors-bg);
    color: var(--color-text);
  }

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    text-align: center;
    color: var(--color-text);

    &:hover {
      cursor: pointer;
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;

export const SubparagraphList = styled.ul`
  margin-top: 10px;
  border-top: var(--border-base);

  display: flex;
  flex-direction: column;

  gap: 10px;

  & > li > a {
    font-size: 14px;
    font-weight: var(--fw-bold);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--color-text);
    &:hover {
      cursor: pointer;
      color: var(--accent-color);
      text-decoration: underline;
    }
  }
`;
