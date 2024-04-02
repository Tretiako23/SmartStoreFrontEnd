import styled from 'styled-components';

export const DiscountDescriptionWrap = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: var(--shadow);
  flex-direction: column;
  padding: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DiscountDescription = styled.div`
  & > h3 {
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
  }
  & > p {
    font-size: var(--fs-md);
  }
`;

export const DiscountDescriptionImg = styled.img`
  width: 190px;
`;

export const FaqList = styled.ul`
  margin-top: 10px;
  box-shadow: var(--shadow);
  background-color: var(--colors-bg);
`;

export const FaqItem = styled.li``;

export const FaqQuestionText = styled.p`
  color: #5ab22e;
  cursor: pointer;
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const FaqAnswerText = styled.p`
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export const FaqAnswerWrap = styled.div`
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;
