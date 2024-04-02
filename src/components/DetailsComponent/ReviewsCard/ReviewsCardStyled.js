import styled from 'styled-components';

export const ReviewsCardWrap = styled.li`
  box-shadow: var(--shadow);
  border: var(--border-base);
  border-radius: var(--b-radius);
  padding: 20px;

  display: flex;
  gap: 20px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & > h3 {
      text-align: center;
    }

    & > div {
      display: flex;
    }
  }
`;
