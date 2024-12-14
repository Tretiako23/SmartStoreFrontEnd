import styled from 'styled-components';
import GoodsCardById from './GoodsCardById';
import { useStore } from '../../../zustand/store';
import { useEffect, useState } from 'react';
import { stringNormalize } from '../../../utils';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

const CardListWrap = styled.div`
  @media (min-width: 1024px) {
    flex: 0 0 80%;
  }
`;

const GoodsListByNestedId = () => {
  const [filteredData, setFilteredData] = useState([]);
  const goods = useStore(state => state.currentList);
  const { rangeValues, checkBox } = useStore(state => state.filters);

  useEffect(() => {
    setFilteredData(goods);
  }, [goods]);

  useEffect(() => {
    if (!rangeValues && checkBox.length === 0) {
      setFilteredData(goods);
      return;
    }

    const filteredDataByAmount = goods.filter(item => {
      const amount = parseFloat(item.amount);
      const [min, max] = rangeValues.map(parseFloat);

      return amount >= min && amount <= max;
    });

    setFilteredData(filteredDataByAmount);
  }, [rangeValues, goods, checkBox]);

  useEffect(() => {
    if (checkBox.length === 0) return;

    const filterDataByCheckBox = () => {
      const filteredDataByCheckBox = goods.filter(item =>
        item.filters.some(filter =>
          checkBox.some(
            check => stringNormalize(filter.value) === stringNormalize(check)
          )
        )
      );

      setFilteredData(filteredDataByCheckBox);
    };

    filterDataByCheckBox();
  }, [checkBox, goods]);

  function sortByCount(filteredData) {
    return filteredData.sort((a, b) => {
      if (a.count > 0 && b.count <= 0) {
        return -1;
      }

      if (a.count <= 0 && b.count > 0) {
        return 1;
      }

      return 0;
    });
  }

  const sortedData = sortByCount(filteredData);

  return (
    <CardListWrap>
      <CardList>
        {sortedData.length > 0 &&
          sortedData.map(item => <GoodsCardById data={item} key={item._id} />)}
      </CardList>
    </CardListWrap>
  );
};

export default GoodsListByNestedId;
