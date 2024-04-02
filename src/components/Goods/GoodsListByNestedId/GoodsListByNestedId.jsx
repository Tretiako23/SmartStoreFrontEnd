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

  return (
    <CardListWrap>
      <CardList>
        {filteredData.length > 0 &&
          filteredData.map(item => (
            <GoodsCardById data={item} key={item._id} />
          ))}
      </CardList>
    </CardListWrap>
  );
};

export default GoodsListByNestedId;
