/* eslint-disable react/prop-types */

import { ImgCardWrap } from '../Modals/ShopingCartModal/ShopingCartModalStyled';
import { applyDiscount, formatter } from '../../utils';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import {
  ActionBtnWrap,
  AmountWrap,
  BuyBtn,
  FavoriteCardDescription,
  FavoriteCardDescriptionWrap,
  FavoriteCardWrap,
} from './FavoriteCardStyled';

import axios from 'axios';
import { useStore } from '../../zustand/store';
import {
  notifyAddGoodsToShopingCart,
  notifyError,
  notifySucces,
} from '../Toasters/Toasters';

const FavoriteCard = ({ item }) => {
  const { getGoods, setNewIdList } = useStore();
  const user = useStore(state => state.auth.user);

  const deletteItem = async id => {
    try {
      const result = await axios.patch(`goods/${id}/favorite`);

      if (result.status === 200) getGoods();

      if (result.data.favorites.includes(user.id)) {
        notifySucces('Товар успішно додано до закладок!');
        return;
      }
      notifySucces('Товар успішно видалено з закладок!');
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

  const onByClick = id => {
    try {
      let idList = JSON.parse(localStorage.getItem('idList')) || [];

      if (!idList.includes(id)) {
        const newArr = [...idList, id];

        localStorage.setItem('idList', JSON.stringify(newArr));
        setNewIdList(newArr);
        notifyAddGoodsToShopingCart(item.title);
        return;
      } else {
        notifyAddGoodsToShopingCart(item.title);
      }
    } catch (error) {
      console.log('eror=>>>', error.message);
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  return (
    <FavoriteCardWrap>
      <FavoriteCardDescriptionWrap>
        <div>
          <img
            src={item.imgUrl}
            alt={item.title}
            width={'200px'}
            height={'200px'}
          />
        </div>
        <FavoriteCardDescription>
          <h3>{item.title}</h3>
          <p>
            Модель:
            <span>{` ${item.model}`}</span>
          </p>

          <AmountWrap>
            <p>
              Вартість за одиницю товару:{' '}
              <span>{item.discount ? formatter.format(item.amount) : ''}</span>
              <span>
                {item.discount
                  ? formatter.format(applyDiscount(item.amount, item.discount))
                  : formatter.format(item.amount)}
              </span>
            </p>
          </AmountWrap>
        </FavoriteCardDescription>
      </FavoriteCardDescriptionWrap>
      <ActionBtnWrap>
        <RiDeleteBin5Fill size={'25px'} onClick={() => deletteItem(item._id)} />

        <BuyBtn type="button" onClick={() => onByClick(item._id)}>
          Купити
        </BuyBtn>
      </ActionBtnWrap>
    </FavoriteCardWrap>
  );
};

export default FavoriteCard;
