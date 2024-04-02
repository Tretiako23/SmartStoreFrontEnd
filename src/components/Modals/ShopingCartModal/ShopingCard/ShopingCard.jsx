/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  BaseInfoWrap,
  CountWrap,
  ImgCardWrap,
  ShopingCardWrap,
} from '../ShopingCartModalStyled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { notifyError, notifySucces } from '../../../Toasters/Toasters';
import { useStore } from '../../../../zustand/store';
import { formatter } from '../../../../utils';

const ShopingCard = ({ item, index, setTotalAmount, setBuyingList }) => {
  const [count, setCount] = useState(1);
  const [currentAmount, setCurrentAmount] = useState(() => count * item.amount);
  const { removeIdItem } = useStore();

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => setCount(prev => prev - 1);

  const deletteItem = async id => {
    try {
      let data = JSON.parse(localStorage.getItem('idList')) || [];

      localStorage.setItem(
        'idList',
        JSON.stringify(data.filter(item => item !== id))
      );
      removeIdItem(id);
      setTotalAmount(prev => Number(prev) - Number(currentAmount));
      notifySucces('Товар видалено з кошику!');
    } catch (error) {
      notifyError(
        "Щось пішло не так, спробуйте пізніше або зв'яжіться з нами по телефону!"
      );
    }
  };

  useEffect(() => {
    setBuyingList(prev =>
      prev.map(goods =>
        goods._id === item._id ? { ...goods, buyCount: count } : goods
      )
    );
  }, [count]);

  useEffect(() => {
    const amount = Number(count) * Number(item.amount);

    setTotalAmount(
      prevTotalAmount =>
        prevTotalAmount - Number(currentAmount) + Number(amount)
    );

    setCurrentAmount(amount);
  }, [count, currentAmount, item.amount, setTotalAmount]);

  useEffect(() => {
    setTotalAmount(prevTotalAmount => {
      if (index === 0) {
        return Number(item.amount);
      } else {
        return prevTotalAmount + Number(item.amount);
      }
    });
  }, [index, item.amount, setTotalAmount]);

  return (
    <ShopingCardWrap>
      <ImgCardWrap>
        <img
          src={item.imgUrl}
          alt={item.title}
          width={'100px'}
          height={'100px'}
        />
      </ImgCardWrap>

      <BaseInfoWrap>
        <h3>{item.title}</h3>
        <CountWrap>
          <span onClick={decrementCount}>-</span>
          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          />
          <span onClick={incrementCount}>+</span>
        </CountWrap>
        <span>{formatter.format(item.amount * count)}</span>
      </BaseInfoWrap>

      <div>
        <RiDeleteBin5Fill size={'25px'} onClick={() => deletteItem(item._id)} />
      </div>
    </ShopingCardWrap>
  );
};

export default ShopingCard;
