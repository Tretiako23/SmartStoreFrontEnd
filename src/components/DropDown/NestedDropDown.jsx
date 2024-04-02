/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { NestedDropdownItem, NestedDropdownList } from './NestedDropDownStyled';
import { NavLink } from 'react-router-dom';
import { stringNormalize } from '../../utils';

const NestedDropdown = ({ data, type, categoriName, objKey }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = event => {
      containerRef.current.scrollLeft += event.deltaY * 0.3;
      event.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const filtersData = data.filter(
    item => stringNormalize(item[objKey]) === stringNormalize(type)
  );

  const uniqueFilters = filtersData
    .map(item => item.model)
    .filter((filter, index, array) => array.indexOf(filter) === index);

  return (
    <NestedDropdownList
      className="nested-dropdown-content"
      id={categoriName}
      ref={containerRef}
    >
      {uniqueFilters.map(model => (
        <NestedDropdownItem key={model}>
          <NavLink
            to={stringNormalize(
              `/goods/${categoriName}/${type}/${encodeURIComponent(model)}`
            )}
          >
            {model}
          </NavLink>
        </NestedDropdownItem>
      ))}
    </NestedDropdownList>
  );
};

export default NestedDropdown;
