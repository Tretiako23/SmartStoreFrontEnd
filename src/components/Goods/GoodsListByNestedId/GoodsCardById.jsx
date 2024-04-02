/* eslint-disable react/prop-types */

import { FaStar } from 'react-icons/fa';
import { FcLike, FcDislike } from 'react-icons/fc';
import {
  AmountWrap,
  CardItemWrap,
  CardLink,
  DescriptionWrap,
  DiscountWrap,
  FavoritesWrap,
  StarWrap,
} from './GoodsCardStyled';
import { notifyError, notifySucces } from '../../Toasters/Toasters';
import { useStore } from '../../../zustand/store';
import {
  applyDiscount,
  calculateAverageRating,
  formatter,
} from '../../../utils';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Buybtn from '../../Common/Buybtn';
import ModalPort from '../../ModalPort/ModalPort';
import SubscribeModal from '../../Modals/SubscribeModal/SubscribeModal';
import { useState } from 'react';

const GoodsCardById = ({ data }) => {
  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();
  const isLoggedIn = useStore(store => store.auth.isLoggedIn);
  let { goodsName, id, nestedId } = useParams();
  const [isSubscribe, setIsSubscribe] = useState(false);
  const toggleSubscribeModal = () => setIsSubscribe(prev => !prev);

  const discount = data && parseInt(data.discount);
  const isFavorite = data && data.favorites.includes(user?.id);
  const ratingArr = data && data.reviews.map(item => item.feedbackPoints);

  const { imgUrl, title, description, _id, amount } = data;

  const handleFavorite = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);

      if (result.status === 200) getGoods();

      if (result.data.favorites.includes(user.id)) {
        notifySucces('Товар успішно додано до закладок!');
        return;
      }
      notifySucces('Товар успішно видалено з закладок закладок!');
    } catch (error) {
      if (error?.response?.status === 401) {
        notifyError(
          'Для додавання товару в закладки необхідно увійти в акаунт!'
        );
        return;
      }
      notifyError('Упс, щось пішло не так ...Спробуйте пізніше');
    }
  };

  return (
    <CardItemWrap>
      <div>
        <div>
          <CardLink to={`/goods/${goodsName}/details/${_id}`}>
            <img
              src={imgUrl}
              alt={title}
              width="200px"
              height="200px"
              loading="lazy"
            />

            <h3>{title}</h3>
          </CardLink>

          {isLoggedIn ? (
            <DiscountWrap>
              <span>-{user.personalDiscount}%</span>
              {discount > 0 && <span>Акція</span>}
            </DiscountWrap>
          ) : (
            discount > 0 && (
              <DiscountWrap>
                <span>-{discount}%</span>
                <span>Акція</span>
              </DiscountWrap>
            )
          )}

          <FavoritesWrap onClick={() => handleFavorite(_id)}>
            {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
          </FavoritesWrap>
        </div>
      </div>
      <StarWrap>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={25}
            color={
              index < calculateAverageRating(ratingArr)
                ? 'rgb(201 183 77)'
                : 'gray'
            }
          />
        ))}
      </StarWrap>
      <DescriptionWrap>
        <p>{description}</p>

        {!isLoggedIn ? (
          discount && discount !== 0 && discount > 0 ? (
            <AmountWrap>
              <span>{formatter.format(amount)}</span>
              <span>{formatter.format(applyDiscount(amount, discount))}</span>
            </AmountWrap>
          ) : (
            <AmountWrap>
              <span></span>
              <span>{formatter.format(amount)}</span>
            </AmountWrap>
          )
        ) : user.personalDiscount > 0 ? (
          <AmountWrap>
            <span>{formatter.format(amount)}</span>
            <span>
              {formatter.format(applyDiscount(amount, user.personalDiscount))}
            </span>
          </AmountWrap>
        ) : (
          <AmountWrap>
            <span></span>
            <span>{formatter.format(amount)}</span>
          </AmountWrap>
        )}

        <Buybtn data={data} toggleModal={toggleSubscribeModal} />

        {data.count === 0 && isSubscribe && (
          <ModalPort toggleModal={toggleSubscribeModal}>
            <SubscribeModal toggleModal={toggleSubscribeModal} id={data._id} />
          </ModalPort>
        )}
      </DescriptionWrap>
    </CardItemWrap>
  );
};

export default GoodsCardById;
