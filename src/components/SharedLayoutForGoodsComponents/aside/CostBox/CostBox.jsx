/* eslint-disable react/prop-types */

import RangeSlider from '../Range/RangeSlider';
import { InputsWrap } from './CostBoxStyled';
import { FiltersItemWrap } from '../../../Filters/AsideFiltersItemStyled';
import { useEffect } from 'react';
import { useStore } from '../../../../zustand/store';

const CostBox = () => {
  const goods = useStore(state => state.currentList);
  const { rangeValues } = useStore(state => state.filters);
  const { setRangeValues } = useStore();

  useEffect(() => {
    function findMaxMin(arr) {
      if (!arr.length) return;
      setRangeValues([Math.min(...arr), Math.max(...arr)]);
    }
    const array = goods.map(item => Number(item.amount));

    findMaxMin(array);
  }, [goods]);

  const isRange = rangeValues?.length > 0 && rangeValues[0] !== rangeValues[1];

  return (
    rangeValues && (
      <FiltersItemWrap>
        <InputsWrap>
          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={rangeValues[0]}
            onChange={e =>
              isRange &&
              setRangeValues([Number(e.target.value), rangeValues[1]])
            }
          />

          <span>-</span>

          <input
            type="number"
            autoComplete="off"
            aria-label="Ціна"
            value={rangeValues[1]}
            onChange={e =>
              isRange &&
              setRangeValues([rangeValues[0], Number(e.target.value)])
            }
          />

          <span>Грн</span>
        </InputsWrap>
        {isRange && (
          <RangeSlider
            rangeValues={rangeValues}
            setRangeValues={setRangeValues}
          />
        )}
      </FiltersItemWrap>
    )
  );
};

export default CostBox;
