import {
  FaqAnswerWrap,
  FaqQuestionText,
} from '../../pages/DiscountRulesPage/DiscountRulesPageStyled';
import {
  AnswerWrap,
  Item,
  Step,
  Text,
} from '../DiscountRules/DiscountRulesComponentStyled';

const HowReturn = () => {
  return (
    <section>
      <FaqQuestionText>Як повернути товар?</FaqQuestionText>
      <FaqAnswerWrap>
        <AnswerWrap>
          <h4>Умови Повернення</h4>
          <ul>
            <Item>
              <Step>1</Step>
              <Text>
                Зберегти товарний вигляд і споживчі властивості товару.
              </Text>
            </Item>
            <Item>
              <Step>2</Step>
              <Text>Зберегти заводські ярлики й пломби на товарі.</Text>
            </Item>
            <Item>
              <Step>3</Step>
              <Text>
                Відсутність слідів використання і механічних пошкоджень товару.
              </Text>
            </Item>
            <Item>
              <Step>4</Step>
              <Text>
                Зберегти оригінальну упаковку товару і її товарний вигляд.
              </Text>
            </Item>
          </ul>
        </AnswerWrap>
      </FaqAnswerWrap>
    </section>
  );
};

export default HowReturn;
// <FaqList>
//   <FaqItem>
//     <FaqQuestionText>Як повернути товар?</FaqQuestionText>
//     <FaqAnswerWrap>
//       <AnswerWrap>
//         <h4>Умови Повернення</h4>
//         <ul>
//           <Item>
//             <Step>1</Step>
//             <Text>
//               Зберегти товарний вигляд і споживчі властивості товару.
//             </Text>
//           </Item>
//           <Item>
//             <Step>2</Step>
//             <Text>Зберегти заводські ярлики й пломби на товарі.</Text>
//           </Item>
//           <Item>
//             <Step>3</Step>
//             <Text>
//               Відсутність слідів використання і механічних пошкоджень
//               товару.
//             </Text>
//           </Item>
//           <Item>
//             <Step>4</Step>
//             <Text>
//               Зберегти оригінальну упаковку товару і її товарний вигляд.
//             </Text>
//           </Item>
//         </ul>
//       </AnswerWrap>
//     </FaqAnswerWrap>
//   </FaqItem>
// </FaqList>;
