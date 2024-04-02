/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import {
  AmountWrap,
  CardItemWrap,
  CardLink,
  DescriptionWrap,
  StarWrap,
} from '../Goods/GoodsListByNestedId/GoodsCardStyled';
import styled from 'styled-components';
import { useStore } from '../../zustand/store';
import UpdateGoods from './UpdateGoods/UpdateGoods';
import { useState } from 'react';

const ChoiseWrap = styled.div`
  border: var(--border-base);
  width: fit-content;
  position: absolute;
  right: 10px;
  display: flex;
  gap: 10px;
  & > svg {
    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
  }
`;

const Card = ({ data }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { removeGoods } = useStore();

  const { imgUrl, title, amount, discount = 0, _id, description } = data;

  const deletteItem = async () => {
    removeGoods(_id);
  };

  const toggleModal = () => {
    setIsUpdate(prev => !prev);
  };

  function applyDiscount(amount, discountPercent) {
    if (parseInt(discountPercent) < 0 || parseInt(discountPercent) > 100) {
      return 'Некоректні дані';
    }

    // Обчислення суми знижки
    let discountAmount = parseInt(amount) * (parseInt(discountPercent) / 100);

    // Обчислення вартості зі знижкою
    let discountedPrice = parseInt(amount) - discountAmount;

    // Округлення до цілого числа
    discountedPrice = Math.round(discountedPrice);

    return discountedPrice;
  }

  const countPositiveFeedbackPoints = () => {
    const total = 0;
    const good = 0;

    // Розрахунок відсотка позитивного відгуку
    const percentage = (good / total) * 100;

    // Розрахунок кількості зірочок від 0 до 5
    const stars = Math.ceil(percentage / 20);

    // Перевірка, щоб не було більше 5 зірочок
    const cappedStars = Math.min(stars, 5);

    return cappedStars;
  };

  const starsCount = countPositiveFeedbackPoints();

  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < starsCount) {
      stars.push(<FaStar key={i} size={25} color="rgb(201 183 77)" />);
    } else {
      stars.push(<FaStar key={i} size={25} />);
    }
  }

  return (
    <>
      <CardItemWrap>
        <ChoiseWrap>
          <RiDeleteBin5Fill size={'25px'} onClick={deletteItem} />
          <RiEdit2Fill size={'25px'} onClick={toggleModal} />
        </ChoiseWrap>

        <div>
          <CardLink>
            <img src={imgUrl} alt="" width="200px" height="200px" />
            <h3>{title}</h3>

            {discount > 0 && (
              <div>
                <span>-{discount}%</span>
                <span>Акція</span>
              </div>
            )}
          </CardLink>
        </div>
        <StarWrap>{stars}</StarWrap>
        <DescriptionWrap>
          <p>{description}</p>
          {discount ? (
            <AmountWrap>
              <span>{amount}.00₴</span>
              <span>{applyDiscount(amount, discount)}.00₴</span>
            </AmountWrap>
          ) : (
            <AmountWrap>
              <span></span>
              <span>{amount}.00₴</span>
            </AmountWrap>
          )}
        </DescriptionWrap>
      </CardItemWrap>
      {isUpdate && <UpdateGoods toggleModal={toggleModal} data={data} />}
    </>
  );
};

export default Card;
