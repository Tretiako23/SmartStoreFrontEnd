/* eslint-disable react/prop-types */
import { useStore } from '../../zustand/store';
import { CheckboxItem, FiltersItemWrap } from './AsideFiltersItemStyled';

const AsideFiltersItem = ({ name }) => {
  const goods = useStore(state => state.currentList);
  const { checkBox } = useStore(state => state.filters);
  const { setCheckBox } = useStore();

  const filtersData = goods
    .flatMap(item => item.filters)
    .filter(item => item.name.trim() === name.trim())
    .map(item => item.value);

  const uniqueFilters = filtersData.filter(
    (filter, index, array) => array.indexOf(filter) === index
  );

  const filteredCount = value =>
    goods
      .flatMap(item => item.filters)
      .map(item => ({ name: item.name.trim(), value: item.value.trim() }))
      .filter(item => item.name.trim() === name.trim() && item.value === value)
      .length;

  const handleCheckboxChange = (item, checked) => {
    if (checked) {
      setCheckBox([...checkBox, item]);
    } else {
      setCheckBox(checkBox.filter(i => i !== item));
    }
  };

  return (
    <FiltersItemWrap>
      <h3>{name}</h3>
      <ul>
        {uniqueFilters.map(item => (
          <CheckboxItem key={item}>
            <div>
              <input
                type="checkbox"
                id={`${item}`}
                onChange={e => handleCheckboxChange(item, e.target.checked)}
              />
              <label htmlFor={`${item}`}>{`${item}`}</label>
            </div>

            <span>{filteredCount(item)}</span>
          </CheckboxItem>
        ))}
      </ul>
    </FiltersItemWrap>
  );
};

export default AsideFiltersItem;
