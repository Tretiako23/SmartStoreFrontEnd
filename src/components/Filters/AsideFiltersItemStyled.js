import styled from 'styled-components';

export const AsideFiltersListWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const FiltersItemWrap = styled.li`
  width: 100%;
  padding: 15px 20px;

  border-radius: var(--b-radius-sm);

  background-color: hsl(0deg 7.6% 81.25% / 38%);
  box-shadow: var(--shadow);

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const CheckboxItem = styled.li`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: flex-start;

    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    & > label,
    & > input {
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.1);

      box-shadow: var(--shadow);
      border-radius: var(--b-radius-sm);
    }
  }

  & > span {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;

    border-radius: 50%;
    background-color: hsl(0deg 7.6% 81.25% / 38%);
    font-size: 12px;
    display: grid;
    place-items: center;
  }
`;
