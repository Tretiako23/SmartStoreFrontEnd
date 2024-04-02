import styled from 'styled-components';

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const DiscountSizeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: var(--b-radius-sm);

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Text = styled.p``;

export const Step = styled.span`
  display: grid;
  place-items: center;
  border: 1px solid #717171;
  border-radius: 100%;
  color: #717171;

  font-weight: 600;

  height: 24px;
  width: 24px;

  flex: 0 0 24px;
`;

export const TableRow = styled.td`
  border: 1px solid #e5e5e5;
  padding: 6px 5px;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableWrap = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  width: 100%;
  box-shadow: var(--shadow);
  border-radius: var(--b-radius-sm);
  overflow: hidden;
`;

export const TableTh = styled.th`
  background: #e0dfdf;
  text-transform: uppercase;
  border: 1px solid #e5e5e5;
  padding: 6px 5px;
  color: black;
`;

export const DiscountCount = styled.span`
  border: 1px solid #5ab22e;
  border-radius: 3px;
  color: #5ab22e;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  width: 40px;
`;
