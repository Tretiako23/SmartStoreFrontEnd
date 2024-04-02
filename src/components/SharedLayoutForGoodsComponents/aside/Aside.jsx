/* eslint-disable react/prop-types */
import AsideFiltersItem from '../../Filters/AsideFiltersItem';
import CostBox from './CostBox/CostBox';
import { useStore } from '../../../zustand/store';
import styled from 'styled-components';

const AsideWrap = styled.aside`
  width: calc(100vw - 100px);

  position: sticky;
  max-height: 100vh;
  overflow-y: auto;
  top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    max-width: 440px;
  }

  @media (min-width: 1024px) {
    width: 25%;
    margin-right: 20px;
    flex: 0 0 20%;
    max-width: 25%;
  }
`;

export const Aside = () => {
  const goods = useStore(state => state.currentList);

  const filtersData = goods
    .flatMap(item => item.filters)
    .map(item => item.name.trim());

  const uniqueFilters = filtersData.filter(
    (filter, index, array) => array.indexOf(filter) === index
  );

  return (
    <AsideWrap>
      <ul>
        <CostBox />
        {uniqueFilters.map(item => (
          <AsideFiltersItem key={item} name={item} />
        ))}
      </ul>
    </AsideWrap>
  );
};
