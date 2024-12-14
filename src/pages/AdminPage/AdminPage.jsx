import { useEffect, useState } from 'react';

import { useStore } from '../../zustand/store';

import styled from 'styled-components';
import Card from '../../components/AdminComponent/Card';
import GoodForm from '../../components/AdminComponent/AddGoodsForm/GoodForm';
import { useNavigate } from 'react-router-dom';
import ModalPort from '../../components/ModalPort/ModalPort';
import { BuyBtn } from '../../components/Goods/GoodsListByNestedId/GoodsCardStyled';
import { UpdateFromWrap } from '../../components/AdminComponent/UpdateGoods/UpdateGoodsStyled';
import SalesPostsAction from '../../components/AdminComponent/SalesPostsAction/SalesPostsAction';

const AdminList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const AdminPage = () => {
  const { getGoods } = useStore();
  const [isNewGoods, setIsNewGoods] = useState(false);
  const [isSalesPosts, setIsSalesPosts] = useState(false);

  const goods = useStore(state => state.goods);

  const isLoggedIn = useStore(state => state.auth.isLoggedIn);
  const user = useStore(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if ((!isLoggedIn && user?.role === 'user') || user?.role !== 'admin') {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    getGoods();
  }, []);

  const toggleIsNewGoodsModal = () => setIsNewGoods(prev => !prev);
  const toggleIsSalesPostsModal = () => setIsSalesPosts(prev => !prev);

  function sortByCount(goods) {
    return goods.sort((a, b) => {
      if (a.count > 0 && b.count <= 0) {
        return -1;
      }

      if (a.count <= 0 && b.count > 0) {
        return 1;
      }

      return 0;
    });
  }

  const sortedData = sortByCount(goods);

  return (
    <>
      <BuyBtn
        type="button"
        style={{
          backgroundColor: 'var(--accent-color)',
          width: '300px',
          marginTop: '20px',
        }}
        onClick={toggleIsNewGoodsModal}
      >
        Додати новий товар
      </BuyBtn>
      <BuyBtn
        type="button"
        style={{
          backgroundColor: 'var(--accent-color)',
          width: '300px',
          marginTop: '20px',
        }}
        onClick={toggleIsSalesPostsModal}
      >
        Додати банер
      </BuyBtn>

      {isNewGoods && (
        <ModalPort toggleModal={toggleIsNewGoodsModal}>
          <UpdateFromWrap>
            <GoodForm />
          </UpdateFromWrap>
        </ModalPort>
      )}

      {isSalesPosts && (
        <ModalPort toggleModal={toggleIsSalesPostsModal}>
          <UpdateFromWrap>
            <SalesPostsAction />
          </UpdateFromWrap>
        </ModalPort>
      )}

      <AdminList>
        {sortedData.length &&
          sortedData.map(item => <Card key={item._id} data={item} />)}
      </AdminList>
    </>
  );
};

export default AdminPage;
