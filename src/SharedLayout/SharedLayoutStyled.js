import styled from 'styled-components';

export const SectionWrap = styled.section``;
export const CategoriesList = styled.ul`
  display: flex;
  gap: 20px;

  margin-top: 10px;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);

  @media (min-width: 1024px) {
    justify-content: center;
  }

  & > li {
    display: block;
    &:not(:first-child) {
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  & > li:not(:nth-last-child(-n + 2)) > ul > li > ul {
    left: 99%;
  }

  & > li:nth-last-child(-n + 2) > ul > li > ul {
    right: 99%;
  }
`;

export const CategoriesItem = styled.li`
  cursor: pointer;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

export const SubСategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
