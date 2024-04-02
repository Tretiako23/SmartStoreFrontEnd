import { FaqAnswerWrap } from '../../pages/DiscountRulesPage/DiscountRulesPageStyled';
import {
  Item,
  Step,
  TableRow,
  TableWrap,
  TableBody,
  Text,
  TableTh,
  DiscountCount,
  DiscountSizeWrap,
} from './DiscountRulesComponentStyled';

const DiscountSize = () => {
  return (
    <FaqAnswerWrap>
      <DiscountSizeWrap>
        <ul>
          <Item>
            <Step>1</Step>
            <Text>Увійдіть до особистого акаунту інтернет-магазину.</Text>
          </Item>
          <Item>
            <Step>2</Step>
            <Text>Перейдіть до розділу особистого акаунту «Мої знижки».</Text>
          </Item>
          <Item>
            <Step>3</Step>
            <Text>
              Ціни на сторінках товарів будуть вказані з урахуванням
              персональної знижки.
            </Text>
          </Item>
        </ul>
        <p>
          Розмір персональної знижки розраховується, виходячи із суми всіх ваших
          покупок за останні 3 роки й перераховується кожні 24 години о 00:00
          згідно з наведеними нижче умовами накопичення.
        </p>
        <TableWrap>
          <TableBody>
            <tr>
              <TableTh colSpan="2">УМОВИ НАКОПИЧЕННЯ</TableTh>
            </tr>
            <tr>
              <TableRow>
                <b>Сума замовлень</b>
              </TableRow>
              <TableRow>
                <b>Персональна знижка</b>
              </TableRow>
            </tr>
            <tr>
              <TableRow>до 500 грн</TableRow>
              <TableRow>
                <DiscountCount>-3%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>501 – 1000 грн</TableRow>
              <TableRow>
                <DiscountCount>-5%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>1001 – 1500 грн</TableRow>
              <TableRow>
                <DiscountCount>-7%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>1501 – 2500 грн</TableRow>
              <TableRow>
                <DiscountCount>-10%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>2501 – 5000 грн</TableRow>
              <TableRow>
                <DiscountCount>-12%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>5001 - 7000 грн</TableRow>
              <TableRow>
                <DiscountCount>-15%</DiscountCount>
              </TableRow>
            </tr>
            <tr>
              <TableRow>від 7001 грн</TableRow>
              <TableRow>
                <DiscountCount>-20%</DiscountCount>
              </TableRow>
            </tr>
          </TableBody>
        </TableWrap>
      </DiscountSizeWrap>
    </FaqAnswerWrap>
  );
};

export default DiscountSize;
