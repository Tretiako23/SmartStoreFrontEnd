import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import Main from '../../components/Main/Main';
import { Aside } from '../../components/SharedLayoutForGoodsComponents/aside/Aside';
import styled from 'styled-components';
import GoodsListByNestedId from '../../components/Goods/GoodsListByNestedId/GoodsListByNestedId';

import { useStore } from '../../zustand/store';
import { stringNormalize } from '../../utils';
import ModalPort from '../../components/ModalPort/ModalPort';

const GoodsSection = styled.section`
  margin-top: 10px;
  padding: 15px;
  background-color: var(--colors-ui-base);
`;

const CoodsWrap = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

const FiltersBtn = styled.button`
  z-index: 1;
  position: fixed;
  bottom: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 40px;
  width: 40px;
  border-radius: 50%;

  border: none;
  font-size: var(--fs-md);
  // border-radius: 20px;

  background-color: #1365a6;
  color: hsl(0, 0%, 100%);
  cursor: pointer;

  &:active {
    scale: 1.1;
  }
`;

export const SharedLayoutForGoods = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  let { goodsName, id, nestedId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';

  const { setCurrentGoods } = useStore();
  const goods = useStore(state => state.goods);

  const isNamedGoodsList = goodsName && !id && !nestedId;
  const isGoodsListById = id && !nestedId;

  const toggleModal = () => setIsShowModal(prev => !prev);

  const filterBySearch = (search, goodsList) => {
    const searchLowerCase = search.toLowerCase();
    return goodsList.filter(item => {
      return (
        item.type.toLowerCase().includes(searchLowerCase) ||
        item.brand.toLowerCase().includes(searchLowerCase) ||
        item.title.toLowerCase().includes(searchLowerCase) ||
        item.model.toLowerCase().includes(searchLowerCase)
      );
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (goodsName) {
      const checkArr = ['чохли', 'скло', 'навушники'];
      const typeOrBrand = checkArr.includes(stringNormalize(goodsName));

      const filterById = () =>
        goods.filter(item => {
          const isCategories =
            stringNormalize(item.categories) === stringNormalize(goodsName);

          const isBrand = typeOrBrand
            ? stringNormalize(item.brand) === stringNormalize(id)
            : stringNormalize(item.type) === stringNormalize(id);

          return isCategories && isBrand;
        });

      const filterByNestedId = () => {
        return goods.filter(item => {
          return stringNormalize(item.categories) ===
            stringNormalize(goodsName) && typeOrBrand
            ? stringNormalize(item.model) === stringNormalize(nestedId)
            : stringNormalize(item.type) === stringNormalize(id) &&
                stringNormalize(item.model) === stringNormalize(nestedId);
        });
      };

      isNamedGoodsList &&
        setCurrentGoods(
          filterBySearch(searchValue, [
            ...goods.filter(
              item =>
                stringNormalize(item.categories) === stringNormalize(goodsName)
            ),
          ])
        );

      isGoodsListById &&
        setCurrentGoods(filterBySearch(searchValue, filterById()));

      nestedId &&
        setCurrentGoods(filterBySearch(searchValue, filterByNestedId()));
    } else {
      setCurrentGoods(filterBySearch(searchValue, goods));
    }
  }, [goods, goodsName, id, nestedId, searchValue]);

  return (
    <GoodsSection>
      <Main>
        <CoodsWrap>
          {isLargeScreen ? (
            <Aside goodsName={goodsName} />
          ) : (
            <FiltersBtn type="button" onClick={toggleModal}>
              <BiFilterAlt size={24} />
            </FiltersBtn>
          )}
          {isShowModal && (
            <ModalPort toggleModal={toggleModal}>
              <div style={{ color: 'white' }}>
                <Aside goodsName={goodsName} />
              </div>
            </ModalPort>
          )}

          <GoodsListByNestedId />
        </CoodsWrap>
      </Main>
    </GoodsSection>
  );
};

export default SharedLayoutForGoods;
