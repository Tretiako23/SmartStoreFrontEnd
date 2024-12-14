/* eslint-disable react/prop-types */
import styled from 'styled-components';

const DeliveryText = styled.p`
  color: ${({ $isToday }) => ($isToday ? 'green' : 'red')};
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const NotAvailableText = styled.p`
  color: red;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const IsDelivery = ({ count }) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let deliveryText;

  if (currentHour >= 0 && currentHour < 18) {
    deliveryText = 'Відправимо Сьогодні';
  } else {
    deliveryText = 'Відправимо Завтра';
  }

  return (
    <div style={{ width: '50%' }}>
      {count > 0 ? (
        <DeliveryText $isToday={deliveryText === 'Відправимо Сьогодні'}>
          {deliveryText}
        </DeliveryText>
      ) : (
        <NotAvailableText>Немає в наявності!</NotAvailableText>
      )}
    </div>
  );
};

export default IsDelivery;
