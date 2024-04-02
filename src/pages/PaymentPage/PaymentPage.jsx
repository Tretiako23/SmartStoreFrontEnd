import {
  MethodItem,
  MethodList,
  UkrPostLogo,
} from '../../components/DeliveyPageComponents/DeliveryMethodStyled';

import NovaSvg from '../../assets/novaPoshta.svg?react';
import VisaSvg from '../../assets/visa.svg?react';
import MasterCardSvg from '../../assets/mastercard.svg?react';

import Main from '../../components/Main/Main';

const PaymentPage = () => {
  return (
    <Main>
      <MethodList>
        <MethodItem>
          <div>
            <VisaSvg />
            <MasterCardSvg />
          </div>

          <div>
            <h4>Оплата банківською карткою</h4>
            <p>
              Якщо у вас є банківська картка, ви зможете безпечно оплатити
              покупку за її допомогою. Оплата замовлення здійснюється через
              платіжну систему картками VISA та MasterCard будь-якого
              українського банку.
            </p>
          </div>
        </MethodItem>
        <MethodItem>
          <NovaSvg />
          <div>
            <h4>Оплата у відділенні Нової Пошти</h4>
            <p>
              Оплата здійснюється готівкою або банківською карткою при отриманні
              товару у відділенні Нової Пошти. Ви зможете оплатити замовлення
              без додаткових комісій безпосередньо при його отриманні.
            </p>
          </div>
        </MethodItem>
        <MethodItem>
          <UkrPostLogo />
          <div>
            <h4>Оплата у відділенні Укрпошти</h4>
            <p>
              Оплата здійснюється готівкою при отриманні товару у відділенні
              Укрпошти. Ви зможете оплатити замовлення без додаткових комісій
              безпосередньо при його отриманні.
            </p>
          </div>
        </MethodItem>
      </MethodList>
    </Main>
  );
};

export default PaymentPage;
