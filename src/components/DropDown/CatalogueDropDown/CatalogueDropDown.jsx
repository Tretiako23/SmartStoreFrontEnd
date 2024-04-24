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

  const checkArr = ['чохли', 'скло', 'навушники'];

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
                  alt={name}
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
                      .map(item => {
                        const typeOrBrand = checkArr.includes(
                          stringNormalize(item.categories)
                        );
                        const objKey = typeOrBrand ? 'brand' : 'type';
                        return item[objKey];
                      })
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
