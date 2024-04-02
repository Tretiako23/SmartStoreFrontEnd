/* eslint-disable react-hooks/exhaustive-deps */
import { FaShoppingCart } from 'react-icons/fa';
import { ShopingCartWrap, ShopingCount } from './ShopingCartBoxStyled';
import { useEffect, useState } from 'react';
import ModalPort from '../ModalPort/ModalPort';
import ShopingCartModal from '../Modals/ShopingCartModal/ShopingCartModal';
import { useStore } from '../../zustand/store';

const ShopingCartBox = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const idList = useStore(state => state.idList);
  const { setNewIdList } = useStore();

  const toggleModal = () => setIsShowModal(prev => !prev);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('idList')) || [];
    if (!data || data.length === 0) return;
    setNewIdList(data);
  }, []);

  const shopingCount = idList.length === 0 || !idList ? '0' : idList.length;

  return (
    <>
      <ShopingCartWrap onClick={toggleModal}>
        <FaShoppingCart color="var(--colors-text)" size="25px" />
        <ShopingCount>{shopingCount}</ShopingCount>
      </ShopingCartWrap>
      {isShowModal && (
        <ModalPort toggleModal={toggleModal}>
          <ShopingCartModal toggleModal={toggleModal} />
        </ModalPort>
      )}
    </>
  );
};

export default ShopingCartBox;
