import { GiHamburgerMenu } from 'react-icons/gi';
import { DropdownItemContainer } from '../DropDownStyled';
import { useState } from 'react';
import {
  CatalougeList,
  Catalougeitem,
  SubparagraphList,
} from './CatalogueDropDownStyled';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../../zustand/store';
import { stringNormalize } from '../../../utils';

const CatalogueDropDown = () => {
  const [showContent, setShowContent] = useState(false);
  const goods = useStore(state => state.goods);

  const uniqueCategories = [...new Set(goods.map(item => item.categories))];

  const handleHoverEnter = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  const handleHoverLeave = () => {
    if (showContent)
      setTimeout(() => {
        setShowContent(false);
      }, 200);
  };

  const handleCloseList = e => {
    if (e.target === e.currentTarget) setShowContent(false);
  };

  const toggleContent = () => setShowContent(prev => !prev);
  // --------------------

  function removeSpacesForComparison(str) {
    return str.replace(/\s+/g, '');
  }
  const categoriName = 'Чохли';
  const categoriesData = goods.filter(
    item => stringNormalize(item.categories) === stringNormalize(categoriName)
  );

  const checkArr = ['чохли', 'скло', 'навушники'];
  const typeOrBrand = checkArr.includes(stringNormalize(categoriName));
  const objKey = typeOrBrand ? 'brand' : 'type';

  const uniqueFilters = categoriesData
    .map(item => ({
      original: item[objKey],
      processed: removeSpacesForComparison(item[objKey].toLowerCase()),
    }))
    .filter((filter, index, array) => {
      const currentIndex = array.findIndex(
        item => item.processed === filter.processed
      );
      return currentIndex === index;
    })
    .map(item => item.original);

  return (
    <DropdownItemContainer
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={toggleContent}
      $isHover={showContent}
    >
      <div>
        <GiHamburgerMenu style={{ marginRight: '10px' }} size={'20px'} />
        Каталог
      </div>

      {showContent && (
        <CatalougeList onClick={handleCloseList}>
          {uniqueCategories.map(name => (
            <Catalougeitem key={name}>
              <NavLink to={`/goods/${name}`}>
                <img
                  src={`${
                    goods.find(item => item.categories === name).imgUrl || ''
                  }`}
                  alt=""
                  width="100px"
                  height="100px"
                />

                <h4>{name}</h4>
              </NavLink>
              <SubparagraphList>
                {Array.from(
                  new Set(
                    goods
                      .filter(item => item.categories === name)
                      .map(item => item.type)
                  )
                ).map(type => {
                  return (
                    <li key={type}>
                      <NavLink to={`/goods/${name}/${type}`}>{type}</NavLink>
                    </li>
                  );
                })}
              </SubparagraphList>
            </Catalougeitem>
          ))}
        </CatalougeList>
      )}
    </DropdownItemContainer>
  );
};

export default CatalogueDropDown;
