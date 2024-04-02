import styled from 'styled-components';

export const OrderPageWrap = styled.div`
  padding: 20px 0;
  & > h1 {
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
  }
`;

export const OrderPageForm = styled.form`
  display: grid;

  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > fieldset {
    padding: 0;
    margin: 0;
    border: none;
    & > h3 {
      width: 100%;
      background-color: rgba(211, 204, 204, 0.38);
      padding: 10px;

      border-radius: 10px;
    }
  }
`;

export const PaymentMethodList = styled.ul`
  & > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;

    border: var(--border-base);
    border-radius: 5px;

    margin-top: 10px;

    & > input {
      cursor: pointer;
    }

    & > label {
      display: flex;
      align-items: center;
      gap: 10px;

      & > div {
        & > svg {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

export const DeliveryMethodItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: var(--border-base);
  border-radius: 5px;
  padding: 5px 20px;

  margin-top: 10px;

  & > label {
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
      width: 50px;
      height: 50px;
      border: none;
    }
  }

  & > input {
    cursor: pointer;
  }
`;
