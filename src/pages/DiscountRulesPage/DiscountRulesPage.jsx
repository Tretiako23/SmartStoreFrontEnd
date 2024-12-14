import discount from '../../assets/discount.png';
import {
  DiscountDescription,
  DiscountDescriptionImg,
  DiscountDescriptionWrap,
  FaqAnswerText,
  FaqItem,
  FaqList,
  FaqQuestionText,
} from './DiscountRulesPageStyled';
import { useState } from 'react';
import DiscountSize from '../../components/DiscountRules/DiscountSize';
import Main from '../../components/Main/Main';

const DiscountRulesPage = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  const toggleAnswerVisibility = number => {
    setAnswersVisible(prevState => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  return (
    <Main>
      <section>
        <DiscountDescriptionWrap>
          <DiscountDescriptionImg src={discount} alt="discount" />

          <DiscountDescription>
            <h3>Картка для постійних клієнтів</h3>
            <p>
              Здійснюючи покупки в інтернет-магазині Smartstore.com.ua, Ви маєте
              можливість приєднатися до дисконтної програми й купувати
              різноманітні товари за вигідними цінами. Тому досить
              переплачувати, починайте заощаджувати, отримуючи знижки до 10%.
              Все що потрібно – здійснити свої перші замовлення і бонусна
              система почне рахувати знижки до вашого аккаунту. З правилами
              дисконтної програми можна ознайомитись нижче.
            </p>
          </DiscountDescription>
        </DiscountDescriptionWrap>

        <FaqList>
          <FaqItem>
            <FaqQuestionText onClick={() => toggleAnswerVisibility(1)}>
              Як отримати картку?
            </FaqQuestionText>

            {answersVisible[1] && (
              <FaqAnswerText>
                Стати власником знижок може будь-який роздрібний клієнт
                інтернет-магазину. Для отримання знижок необхідно
                зареєструватись та здійснити своє перше замовлення. Систима
                відразу ж почне рахувати вашу персональну знижку.
              </FaqAnswerText>
            )}
          </FaqItem>

          <FaqItem>
            <FaqQuestionText onClick={() => toggleAnswerVisibility(2)}>
              Як дізнатися розмір знижки?
            </FaqQuestionText>
            {answersVisible[2] && <DiscountSize />}
          </FaqItem>
        </FaqList>
      </section>
    </Main>
  );
};

export default DiscountRulesPage;
