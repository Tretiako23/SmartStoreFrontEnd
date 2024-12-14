/* eslint-disable react/prop-types */

import { FcLike, FcDislike } from 'react-icons/fc';
import axios from 'axios';
import { useState } from 'react';
// import Buybtn from '../../Common/Buybtn';
// import ModalPort from '../../ModalPort/ModalPort';
// import SubscribeModal from '../../Modals/SubscribeModal/SubscribeModal';

import {
  AmountWrap,
  CardItemWrap,
  CardLink,
  DescriptionWrap,
  FavoritesWrap,
  StatusBadge,
  StatusBadgeBox,
} from '../Goods/GoodsListByNestedId/GoodsCardStyled';
import { useStore } from '../../zustand/store';
import { applyDiscount, checkIsNewGoods, formatter } from '../../utils';
import { notifyError, notifySucces } from '../Toasters/Toasters';
import Buybtn from '../Common/Buybtn';
import ModalPort from '../ModalPort/ModalPort';
import SubscribeModal from '../Modals/SubscribeModal/SubscribeModal';

const NewAndHitGoodsCard = ({ data }) => {
  const user = useStore(state => state.auth.user);
  const { getGoods } = useStore();
  const isLoggedIn = useStore(store => store.auth.isLoggedIn);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const toggleSubscribeModal = () => setIsSubscribe(prev => !prev);

  const discount = data && parseInt(data.discount);
  const isFavorite = data && data.favorites.includes(user?.id);

  const isNewGoods = checkIsNewGoods(data.createdAt);
  const isHit = data.isHit;

  const { imgUrl, title, categories, _id, amount } = data;

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
    <CardItemWrap style={{ height: '100%' }}>
      <div>
        <div>
          <CardLink to={`/goods/${categories}/details/${_id}`}>
            <img
              src={imgUrl}
              alt={title}
              width="200px"
              height="200px"
              loading="lazy"
            />

            <h3>{title}</h3>
          </CardLink>

          <StatusBadgeBox>
            {isLoggedIn ? (
              <StatusBadge>
                <span>-{user.personalDiscount}%</span>
                {discount > 0 && <span>Акція</span>}
              </StatusBadge>
            ) : (
              discount > 0 && (
                <StatusBadge>
                  <span>-{discount}%</span>
                  <span>Акція</span>
                </StatusBadge>
              )
            )}

            {isNewGoods && (
              <StatusBadge color="#3da5ca">
                <span> Новинка</span>
              </StatusBadge>
            )}

            {isHit && (
              <StatusBadge color="#7baf35">
                <span>Хіт</span>
              </StatusBadge>
            )}
          </StatusBadgeBox>

          <FavoritesWrap onClick={() => handleFavorite(_id)}>
            {isFavorite ? <FcLike size={30} /> : <FcDislike size={30} />}
          </FavoritesWrap>
        </div>
      </div>

      <DescriptionWrap>
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

export default NewAndHitGoodsCard;
