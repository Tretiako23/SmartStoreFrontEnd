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
import HowActiveCard from '../../components/DiscountRules/HowActiveCard';
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
              переплачувати, починайте заощаджувати, отримуючи знижки до 20%.
              Все що потрібно – оформити замовлення від 300 грн і знижка буде
              нарахована вже після першого замовлення. З правилами дисконтної
              програми можна ознайомитись нижче.
            </p>
          </DiscountDescription>
        </DiscountDescriptionWrap>

        <FaqList>
          <FaqItem>
            <FaqQuestionText onClick={() => toggleAnswerVisibility(1)}>
              Як отримати знижку?
            </FaqQuestionText>

            {answersVisible[1] && (
              <FaqAnswerText>
                Для отримання знижки необхідно оформити замовлення від 300 грн.
                Ви отримаєте знижку після оплати вашого першого замовлення.
                Пам'ятайте кожне ваше замовлення буде збільшувати розмір вашої
                знижки.
              </FaqAnswerText>
            )}
          </FaqItem>

          {/* <FaqItem>
            <FaqQuestionText onClick={() => toggleAnswerVisibility(2)}>
              Як активувати картку?
            </FaqQuestionText>
            {answersVisible[2] && <HowActiveCard />}
          </FaqItem> */}

          <FaqItem>
            <FaqQuestionText onClick={() => toggleAnswerVisibility(3)}>
              Як дізнатися розмір знижки?
            </FaqQuestionText>
            {answersVisible[3] && <DiscountSize />}
          </FaqItem>
        </FaqList>
      </section>
    </Main>
  );
};

export default DiscountRulesPage;
