/* eslint-disable react/prop-types */
import { useStore } from '../../../zustand/store';
import CloseBtn from '../../Common/CloseBtn';
import { AuthTitleWrap } from '../AuthModal/AuthModalStyled';
import {
  BtnWrap,
  ShopingBox,
  ShopingModalWrap,
} from './ShopingCartModalStyled';

import ShopingCard from './ShopingCard/ShopingCard';
import { useEffect, useState } from 'react';
import { formatter, applyDiscount } from '../../../utils';

import { useNavigate } from 'react-router-dom';

const ShopingCartModal = ({ toggleModal }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [buyingList, setBuyingList] = useState([]);

  const navigate = useNavigate();
  const idList = useStore(state => state.idList);
  const isLoggedIn = useStore(state => state.auth.isLoggedIn);
  const user = useStore(state => state.auth.user);

  const data = useStore(state => state.goods);

  useEffect(() => {
    const localStorageListData =
      data?.filter(item => idList.includes(item._id)) || [];

    let updatedByDiscountBuyingList;

    if (!isLoggedIn) {
      updatedByDiscountBuyingList = localStorageListData.map(item => ({
        ...item,
        amount: applyDiscount(item.amount, item?.discount || 0),
      }));
    } else {
      updatedByDiscountBuyingList = localStorageListData.map(item => ({
        ...item,
        amount: applyDiscount(item.amount, user?.personalDiscount || 0),
      }));
    }

    setBuyingList(updatedByDiscountBuyingList);
  }, [idList]);

  const handleOrder = () => {
    navigate('/order', { state: buyingList });
    toggleModal();
  };

  return (
    <ShopingModalWrap>
      <AuthTitleWrap>
        <h3>Кошик</h3>
        <CloseBtn type="button" toggleModal={toggleModal} />
      </AuthTitleWrap>
      <ShopingBox>
        <div>
          <p>
            В кошику<span>{` ${buyingList.length} товарів`}</span> на суму
            <span>{` ${formatter.format(totalAmount)}`}</span>
          </p>
          <p>
            При замовленні на 1000 грн або більше доставка буде безкоштовною
          </p>
        </div>

        {buyingList.length > 0 && (
          <ul>
            {buyingList.map((item, index) => (
              <li key={item._id}>
                <ShopingCard
                  item={item}
                  setTotalAmount={setTotalAmount}
                  setBuyingList={setBuyingList}
                  index={index}
                />
              </li>
            ))}
          </ul>
        )}

        <BtnWrap>
          <button type="button" onClick={toggleModal}>
            Продовжити Покупки
          </button>
          <button type="button" onClick={handleOrder}>
            Оформити Замовлення
          </button>
        </BtnWrap>
      </ShopingBox>
    </ShopingModalWrap>
  );
};

export default ShopingCartModal;
