import { FaqAnswerWrap } from '../../pages/DiscountRulesPage/DiscountRulesPageStyled';
import { AnswerWrap, Item, Step, Text } from './DiscountRulesComponentStyled';

const HowActiveCard = () => {
  return (
    <FaqAnswerWrap>
      <AnswerWrap>
        <h4>Самостійно</h4>
        <ul>
          <Item>
            <Step>1</Step>
            <Text>Зареєструйтесь в інтернет-магазині SmartStore</Text>
          </Item>
          <Item>
            <Step>2</Step>
            <Text>Перейдіть до розділу особистого акаунту «Мої знижки».</Text>
          </Item>
          <Item>
            <Step>3</Step>
            <Text>Додайте картку знижок, ввівши номер вашої картки.</Text>
          </Item>
          <Item>
            <Step>4</Step>
            <Text>
              Персональні знижки будуть доступні відразу після активації.
            </Text>
          </Item>
        </ul>
      </AnswerWrap>
    </FaqAnswerWrap>
  );
};

export default HowActiveCard;
